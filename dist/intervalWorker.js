"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUniqueId = require("uuid/v4");
var IntervalWorker = (function () {
    function IntervalWorker() {
        var _this = this;
        this.works = [];
        var Worker = require("worker-loader!./worker");
        this.worker = new Worker();
        this.worker.onmessage = function (data) { return _this.onMessage(data); };
    }
    IntervalWorker.prototype.setInterval = function (callback, delay) {
        var work = {
            id: createUniqueId(),
            callback: callback,
        };
        this.works.push(work);
        var intervalWork = {
            name: "setInterval",
            id: work.id,
            delay: delay,
        };
        this.worker.postMessage(intervalWork);
        return work.id;
    };
    IntervalWorker.prototype.clearInterval = function (id) {
        var workIndex = this.works && this.works.findIndex(function (x) { return x.id === id; });
        if (workIndex === null || workIndex < 0) {
            return;
        }
        var intervalWork = {
            name: "clearInterval",
            id: this.works[workIndex].id,
        };
        this.worker.postMessage(intervalWork);
        this.works.splice(workIndex, 1);
    };
    IntervalWorker.prototype.onMessage = function (event) {
        var intervalWork = event.data && event.data;
        if (!intervalWork) {
            return;
        }
        switch (intervalWork.name) {
            case "runCallback": {
                var work = this.works && this.works.find(function (x) { return x.id === intervalWork.id; });
                if (!work) {
                    return;
                }
                work.callback();
                break;
            }
        }
    };
    return IntervalWorker;
}());
exports.default = IntervalWorker;
