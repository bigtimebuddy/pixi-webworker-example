// Create a canvas element and insert it into DOM
const width = 800,
  height = 600;
const resolution = window.devicePixelRatio;
const canvas = document.createElement("canvas");
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;
document.body.appendChild(canvas);

// Create the worker
const url = new URL("./worker.ts", import.meta.url);
const worker = new Worker(url, { type: "module" });
const view = canvas.transferControlToOffscreen();
worker.postMessage({ width, height, resolution, view }, [view]);
