import WorkerInterval from "./workerInterval";

const workerInterval = new WorkerInterval();
const clearInterval = workerInterval.clearInterval;
const setInterval = workerInterval.setInterval;

module.exports = {
    clearInterval,
    setInterval
}