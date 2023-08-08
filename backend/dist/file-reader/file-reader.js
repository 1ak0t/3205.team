import { __decorate, __metadata } from "tslib";
import { readFileSync } from 'fs';
import { injectable } from 'inversify';
import { MOCK_FILE } from '../constants/constants.js';
let FileReader = class FileReader {
    constructor() {
        this.rawData = [];
    }
    read() {
        this.rawData = JSON.parse(readFileSync(MOCK_FILE, { encoding: 'utf-8' }));
    }
    getData() {
        return this.rawData;
    }
};
FileReader = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], FileReader);
export default FileReader;
//# sourceMappingURL=file-reader.js.map