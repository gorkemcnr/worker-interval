import WorkerInterval from "./workerInterval";

const workerInterval = new WorkerInterval();
export const clearInterval = (id:string): void => workerInterval.clearInterval(id);
export const setInterval = (callback: () => void, delay: number): string | null => { 
    return workerInterval.setInterval(callback, delay) 
};
