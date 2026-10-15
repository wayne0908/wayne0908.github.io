import { getDocument, GlobalWorkerOptions } from '../vendor/pdfjs/pdf.mjs';

GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.mjs', import.meta.url).href;

const link = document.querySelector('.agenda-pdf');
const canvas = link.querySelector('canvas');
const status = link.querySelector('.pdf-status');

try {
  const document = await getDocument({
    url: link.href,
    standardFontDataUrl: new URL('../vendor/pdfjs/standard_fonts/', import.meta.url).href,
  }).promise;
  const page = await document.getPage(1);
  const original = page.getViewport({ scale: 1 });
  let revision = 0;
  let timer;

  async function render() {
    const current = ++revision;
    const width = link.getBoundingClientRect().width;
    if (!width) return;

    // Render the original PDF at HiDPI resolution, including after resizing.
    const density = Math.max(3, window.devicePixelRatio || 1);
    const viewport = page.getViewport({ scale: width * density / original.width });
    const surface = window.document.createElement('canvas');
    surface.width = Math.ceil(viewport.width);
    surface.height = Math.ceil(viewport.height);

    try {
      await page.render({ canvasContext: surface.getContext('2d'), viewport }).promise;
      if (current !== revision) return;
      canvas.width = surface.width;
      canvas.height = surface.height;
      canvas.getContext('2d').drawImage(surface, 0, 0);
      canvas.hidden = false;
      status.hidden = true;
    } catch (error) {
      console.error('Unable to render research diagram:', error);
    }
  }

  new ResizeObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(render, 100);
  }).observe(link);
} catch (error) {
  console.error('Unable to load research diagram PDF:', error);
}
