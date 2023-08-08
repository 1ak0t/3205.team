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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const controller_1 = require("../controller");
const component_types_1 = require("../../types/component.types");
const http_methods_enum_1 = require("../../types/http-methods.enum");
const http_status_codes_1 = require("http-status-codes");
let JSONController = class JSONController extends controller_1.Controller {
    constructor(logger, fileReader) {
        super(logger);
        this.fileReader = fileReader;
        this.logger.info('Register routes JSONController...');
        fileReader.read();
        this.timeout = null;
        this.addRoute({ path: '/', method: http_methods_enum_1.HttpMethod.Get, handler: this.index });
        this.addRoute({ path: '/', method: http_methods_enum_1.HttpMethod.Post, handler: this.search });
    }
    index(req, res) {
        const allRecords = this.fileReader.getData();
        this.send(res, http_status_codes_1.StatusCodes.OK, allRecords);
    }
    search({ body }, res) {
        const allRecords = this.fileReader.getData();
        let filteredRecords = [];
        if (body.email) {
            filteredRecords = allRecords.filter(record => record.email === body.email);
            if (body.number) {
                filteredRecords = filteredRecords.filter(record => record.number === body.number);
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (filteredRecords.length === 0) {
                this.send(res, http_status_codes_1.StatusCodes.NOT_FOUND, { error: 'Data not found' });
                throw new Error('Data not found');
            }
            this.timeout = setTimeout(() => this.send(res, http_status_codes_1.StatusCodes.OK, filteredRecords), 2000);
        }
        else {
            this.send(res, http_status_codes_1.StatusCodes.BAD_REQUEST, { error: 'Email required' });
        }
    }
};
JSONController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(component_types_1.Component.LoggerInterface)),
    __param(1, (0, inversify_1.inject)(component_types_1.Component.FileReader))
], JSONController);
exports.default = JSONController;
