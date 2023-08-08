import { __decorate, __metadata } from "tslib";
import { pino } from 'pino';
import { injectable } from 'inversify';
let LoggerService = class LoggerService {
    constructor() {
        this.logger = pino();
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
    injectable(),
    __metadata("design:paramtypes", [])
], LoggerService);
export default LoggerService;
//# sourceMappingURL=logger.service.js.map