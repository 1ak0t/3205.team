import { ControllerInterface } from './controller.interface.js';
import { Response, Router } from 'express';
import { LoggerInterface } from '../logger/logger.interface.js';
import { RouteInterface } from '../types/route.interface.js';
export declare abstract class Controller implements ControllerInterface {
    protected readonly logger: LoggerInterface;
    private readonly _router;
    constructor(logger: LoggerInterface);
    get router(): Router;
    addRoute(route: RouteInterface): void;
    send<T>(res: Response, statusCode: number, data: T): void;
    created<T>(res: Response, data: T): void;
    noContent<T>(res: Response, data: T): void;
    ok<T>(res: Response, data: T): void;
}
