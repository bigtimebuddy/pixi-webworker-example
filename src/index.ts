// Get the canvas from the DOM
const canvas = document.querySelector('#app') as HTMLCanvasElement;
const { width, height } = canvas;

// Create the worker
const url = new URL("./worker.ts", import.meta.url);
const worker = new Worker(url, { type: "module" });
const view = canvas.transferControlToOffscreen();
worker.postMessage({ width, height, view, backgroundColor: 0x1099bb }, [view]);
