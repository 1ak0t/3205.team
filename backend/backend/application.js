"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inversify_1 = require("inversify");
const component_types_1 = require("./types/component.types");
let Application = class Application {
    constructor(logger, JSONController) {
        this.logger = logger;
        this.JSONController = JSONController;
        this.logger = logger;
        this.expressApp = (0, express_1.default)();
    }
    initRoutes() {
        this.expressApp.use('/', this.JSONController.router);
    }
    initMiddleware() {
        this.expressApp.use(express_1.default.json());
    }
    init() {
        this.initMiddleware();
        this.initRoutes();
        this.expressApp.listen(3500);
        this.logger.info("Init Express on port 3500");
    }
};
Application = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(component_types_1.Component.LoggerInterface)),
    __param(1, (0, inversify_1.inject)(component_types_1.Component.JSONController))
], Application);
exports.default = Application;
