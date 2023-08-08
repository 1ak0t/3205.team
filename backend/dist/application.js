import { __decorate, __metadata, __param } from "tslib";
import express from 'express';
import { inject, injectable } from 'inversify';
import { Component } from './types/component.types.js';
import cors from 'cors';
let Application = class Application {
    constructor(logger, JSONController) {
        this.logger = logger;
        this.JSONController = JSONController;
        this.logger = logger;
        this.expressApp = express();
    }
    initRoutes() {
        this.expressApp.use('/', this.JSONController.router);
    }
    initMiddleware() {
        this.expressApp.use(express.json());
        this.expressApp.use(cors());
    }
    init() {
        this.initMiddleware();
        this.initRoutes();
        this.expressApp.listen(3500);
        this.logger.info("Init Express on port 3500");
    }
};
Application = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.JSONController)),
    __metadata("design:paramtypes", [Object, Object])
], Application);
export default Application;
//# sourceMappingURL=application.js.map