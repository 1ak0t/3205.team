"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const inversify_1 = require("inversify");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
let Controller = class Controller {
    constructor(logger) {
        this.logger = logger;
        this._router = (0, express_1.Router)();
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
        this.send(res, http_status_codes_1.StatusCodes.CREATED, data);
    }
    noContent(res, data) {
        this.send(res, http_status_codes_1.StatusCodes.NO_CONTENT, data);
    }
    ok(res, data) {
        this.send(res, http_status_codes_1.StatusCodes.OK, data);
    }
};
Controller = __decorate([
    (0, inversify_1.injectable)()
], Controller);
exports.Controller = Controller;
