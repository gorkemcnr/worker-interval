# worker-interval
setInterval and clearInterval implementation with using [Web-Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
to keep up and running on inactive tabs for Chrome, Firefox and IE

# Motivation
Most of the modern browsers (Chrome, Firefox and IE), intervals are clamped to fire no more often than once per second in inactive tabs.
For that reason, decided to implement a library to avoid throttling on timers.

# Getting Started
```
npm install worker-interval
```

# Example
```javascript
import * as workerInterval from 'worker-interval';

// setInterval
const intervalId = workerInterval.setInterval(/*function*/, 1000);

// clearInterval
workerInterval.clearInterval(intervalId);
```

