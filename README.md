# interval-worker
SetInterval and ClearInterval implementation with using [Web-Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
to keep up and running on inactive tabs for Chrome, Firefox and IE

# Motivation
Most of the modern browsers (Chrome, Firefox and IE), intervals are clamped to fire no more often than once per second in inactive tabs.
For that reason, decided to implement a library to avoid throttling on timers.

# Getting Started
```
npm install interval-worker
```

# Example
```javascript
import * as intervalWorker from 'interval-worker';

// setInterval
const intervalId = intervalWorker.setInterval(/*function*/, 1000);

// clearInterval
intervalWorker.clearInterval(intervalId);
```

