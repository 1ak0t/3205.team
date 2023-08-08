import { __decorate, __metadata, __param } from "tslib";
import { inject, injectable } from 'inversify';
import { Controller } from '../controller.js';
import { Component } from '../../types/component.types.js';
import { HttpMethod } from '../../types/http-methods.enum.js';
import { StatusCodes } from 'http-status-codes';
let JSONController = class JSONController extends Controller {
    constructor(logger, fileReader) {
        super(logger);
        this.fileReader = fileReader;
        this.logger.info('Register routes JSONController...');
        fileReader.read();
        this.timeout = null;
        this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
        this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.search });
    }
    index(_req, res) {
        const allRecords = this.fileReader.getData();
        this.send(res, StatusCodes.OK, allRecords);
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
                this.send(res, StatusCodes.NOT_FOUND, { error: 'Data not found' });
                throw new Error('Data not found');
            }
            this.timeout = setTimeout(() => this.send(res, StatusCodes.OK, filteredRecords), 2000);
        }
        else {
            this.send(res, StatusCodes.BAD_REQUEST, { error: 'Email required' });
        }
    }
};
JSONController = __decorate([
    injectable(),
    __param(0, inject(Component.LoggerInterface)),
    __param(1, inject(Component.FileReader)),
    __metadata("design:paramtypes", [Object, Object])
], JSONController);
export default JSONController;
//# sourceMappingURL=json.controller.js.map