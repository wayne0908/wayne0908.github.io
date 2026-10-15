const diagram = document.querySelector('.agenda-pdf');

async function enhanceDiagram() {
  if (!diagram) return;
  const canvas = diagram.querySelector('canvas');
  const fallback = diagram.querySelector('.agenda-fallback');

  try {
    // Keep the vector image visible if the browser cannot load the PDF renderer.
    const { getDocument, GlobalWorkerOptions } = await import('../vendor/pdfjs/pdf.mjs');
    GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.mjs', import.meta.url).href;

    const pdf = await getDocument({
      url: diagram.dataset.pdfSrc,
      standardFontDataUrl: new URL('../vendor/pdfjs/standard_fonts/', import.meta.url).href,
    }).promise;
    const page = await pdf.getPage(1);
    const original = page.getViewport({ scale: 1 });
    let revision = 0;
    let timer;
    let renderTask;
    let renderedSize;

    async function render() {
      const width = diagram.getBoundingClientRect().width;
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

      let task;
      try {
        // Match device pixels directly; avoid shrinking an oversampled text bitmap.
        const viewport = page.getViewport({ scale: width / original.width });
        canvas.width = Math.round(viewport.width * density);
        canvas.height = Math.round(viewport.height * density);
        const context = canvas.getContext('2d', { alpha: false });
        task = page.render({
          canvasContext: context,
          viewport,
          transform: density === 1 ? null : [density, 0, 0, density, 0, 0],
          background: '#ffffff',
        });
        renderTask = task;
        await task.promise;
        if (current !== revision) return;
        canvas.hidden = false;
        fallback.hidden = true;
        renderedSize = size;
      } catch (error) {
        if (error.name !== 'RenderingCancelledException') {
          canvas.hidden = true;
          fallback.hidden = false;
          renderedSize = null;
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
    if ('ResizeObserver' in window) new ResizeObserver(scheduleRender).observe(diagram);
    window.addEventListener('resize', scheduleRender);
    await render();
  } catch (error) {
    canvas.hidden = true;
    fallback.hidden = false;
    console.error('Unable to load research diagram PDF:', error);
  }
}

enhanceDiagram();
