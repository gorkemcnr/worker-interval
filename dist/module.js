"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var workerInterval_1 = require("./workerInterval");
var workerInterval = new workerInterval_1.default();
var clearInterval = workerInterval.clearInterval;
var setInterval = workerInterval.setInterval;
module.exports = {
    clearInterval: clearInterval,
    setInterval: setInterval
};
