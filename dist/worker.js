"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scheduledIntervalWorks = [];
onmessage = function (event) {
    var intervalWork = event.data && event.data;
    if (!intervalWork) {
        return;
    }
    switch (intervalWork.name) {
        case "setInterval": {
            intervalWork.name = "runCallback";
            var intervalId = window.setInterval(function () { postMessage(intervalWork); }, intervalWork.delay);
            scheduledIntervalWorks.push({
                id: intervalWork.id,
                intervalId: intervalId,
            });
            break;
        }
        case "clearInterval": {
            var workIndex = scheduledIntervalWorks.findIndex(function (x) { return x.id === intervalWork.id; });
            if (workIndex >= 0) {
                window.clearInterval(scheduledIntervalWorks[workIndex].intervalId);
                scheduledIntervalWorks.splice(workIndex);
            }
            break;
        }
    }
};
