import * as createUniqueId from "uuid/v4";
import IntervalWork from "./worker";

export interface Work {
  id: string;
  callback: () => void;
}

export default class IntervalWorker {
  private works: Work[] = [];
  private readonly worker: Worker;

  constructor() {
    const Worker = require("worker-loader!./worker");
    this.worker = new Worker();
    this.worker.onmessage = (data) => this.onMessage(data);
  }

  public setInterval(callback: () => void, delay: number): string | null {
    const work: Work = {
      id: createUniqueId(),
      callback,
    };

    this.works.push(work);

    const intervalWork: IntervalWork = {
      name: "setInterval",
      id: work.id,
      delay,
    };

    this.worker.postMessage(intervalWork);

    return work.id;
  }

  public clearInterval(id: string): void {
    const workIndex = this.works && this.works.findIndex(x => x.id === id);
    if (workIndex === null || workIndex < 0) {
      return;
    }

    const intervalWork: IntervalWork = {
      name: "clearInterval",
      id: this.works[workIndex].id,
    };

    this.worker.postMessage(intervalWork);
    this.works.splice(workIndex, 1);
  }

  private onMessage(event: MessageEvent): void {
    const intervalWork = event.data && event.data as IntervalWork;
    if (!intervalWork) {
      return;
    }

    switch (intervalWork.name) {
      case "runCallback": {
        const work = this.works && this.works.find(x => x.id === intervalWork.id);
        if (!work) {
          return;
        }

        work.callback();
        break;
      }
    }
  }
}