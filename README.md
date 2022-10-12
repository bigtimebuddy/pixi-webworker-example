# pixi-webworker-example

Simple example how to implement `@pixi/webworker` using PixiJS 7+ using HTMLCanvasElement's [transferControlToOffscreen](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen).

### Advantages

* Render in another thread is fast and doesn't block the main thread
* Ideal for running React or another virtual DOM-based frameworks

### Disadvantages

* Only browsers that support [OffscreenCanvas](https://caniuse.com/offscreencanvas)
* No interactivity (mouse, pointer or touch events)

## Getting Started

Install dependencies and start. This will open in a browser.

```
npm install
npm start
```
