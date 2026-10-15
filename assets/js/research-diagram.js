import { getDocument, GlobalWorkerOptions } from '../vendor/pdfjs/pdf.mjs';

GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.mjs', import.meta.url).href;

const link = document.querySelector('.agenda-pdf');
const canvas = link.querySelector('canvas');
const status = link.querySelector('.pdf-status');

try {
  const pdf = await getDocument({
    url: link.href,
    standardFontDataUrl: new URL('../vendor/pdfjs/standard_fonts/', import.meta.url).href,
  }).promise;
  const page = await pdf.getPage(1);
  const original = page.getViewport({ scale: 1 });
  let revision = 0;
  let timer;
  let renderTask;
  let renderedSize;

  async function render() {
    const width = link.getBoundingClientRect().width;
    if (!width) return;

    const density = window.devicePixelRatio || 1;
    const size = `${width}:${density}`;
    if (!renderTask && size === renderedSize) return;
    const current = ++revision;
    if (renderTask) {
      renderTask.cancel();
      try {
        await renderTask.promise;
      } catch (error) {
        if (error.name !== 'RenderingCancelledException') console.error(error);
      }
      if (current !== revision) return;
    }

    // Match device pixels directly; avoid shrinking an oversampled text bitmap.
    const viewport = page.getViewport({ scale: width / original.width });
    canvas.width = Math.round(viewport.width * density);
    canvas.height = Math.round(viewport.height * density);
    const context = canvas.getContext('2d', { alpha: false });
    const task = page.render({
      canvasContext: context,
      viewport,
      transform: density === 1 ? null : [density, 0, 0, density, 0, 0],
      background: '#ffffff',
    });
    renderTask = task;
    try {
      await task.promise;
      if (current !== revision) return;
      canvas.hidden = false;
      status.hidden = true;
      renderedSize = size;
    } catch (error) {
      if (error.name !== 'RenderingCancelledException') {
        canvas.hidden = true;
        status.hidden = false;
        console.error('Unable to render research diagram:', error);
      }
    } finally {
      if (renderTask === task) renderTask = null;
    }
  }

  function scheduleRender() {
    clearTimeout(timer);
    timer = setTimeout(render, 100);
  }
  new ResizeObserver(scheduleRender).observe(link);
  window.addEventListener('resize', scheduleRender);
} catch (error) {
  console.error('Unable to load research diagram PDF:', error);
}
