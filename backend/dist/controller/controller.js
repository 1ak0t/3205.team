import { __decorate, __metadata } from "tslib";
import { injectable } from 'inversify';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
let Controller = class Controller {
    constructor(logger) {
        this.logger = logger;
        this._router = Router();
    }
    get router() {
        return this._router;
    }
    addRoute(route) {
        this._router[route.method](route.path, route.handler.bind(this));
        this.logger.info(`Route registered: ${route.method.toUpperCase()} ${route.path}`);
    }
    send(res, statusCode, data) {
        res
            .type('application/json')
            .status(statusCode)
            .json(data);
    }
    created(res, data) {
        this.send(res, StatusCodes.CREATED, data);
    }
    noContent(res, data) {
        this.send(res, StatusCodes.NO_CONTENT, data);
    }
    ok(res, data) {
        this.send(res, StatusCodes.OK, data);
    }
};
Controller = __decorate([
    injectable(),
    __metadata("design:paramtypes", [Object])
], Controller);
export { Controller };
//# sourceMappingURL=controller.js.map