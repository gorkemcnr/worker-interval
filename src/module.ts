import IntervalWorker from "./intervalWorker";

const intervalWorker = new IntervalWorker();
export const clearInterval = intervalWorker.clearInterval;
export const setInterval = intervalWorker.setInterval;