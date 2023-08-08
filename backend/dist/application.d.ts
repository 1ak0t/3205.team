import { LoggerInterface } from './logger/logger.interface.js';
import { ControllerInterface } from './controller/controller.interface.js';
export default class Application {
    private logger;
    private JSONController;
    private expressApp;
    constructor(logger: LoggerInterface, JSONController: ControllerInterface);
    initRoutes(): void;
    initMiddleware(): void;
    init(): void;
}
