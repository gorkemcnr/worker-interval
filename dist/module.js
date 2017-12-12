"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intervalWorker_1 = require("./intervalWorker");
var intervalWorker = new intervalWorker_1.default();
exports.clearInterval = intervalWorker.clearInterval;
exports.setInterval = intervalWorker.setInterval;
