"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = require("pino");
const inversify_1 = require("inversify");
let LoggerService = class LoggerService {
    constructor() {
        this.logger = (0, pino_1.pino)();
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
};
LoggerService = __decorate([
    (0, inversify_1.injectable)()
], LoggerService);
exports.default = LoggerService;
