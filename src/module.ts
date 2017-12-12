import WorkerInterval from "./workerInterval";

const workerInterval = new WorkerInterval();
export const clearInterval = workerInterval.clearInterval;
export const setInterval = workerInterval.setInterval;