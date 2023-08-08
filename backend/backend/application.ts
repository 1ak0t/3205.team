import {Express} from 'express';
import express from 'express';
import {LoggerInterface} from './logger/logger.interface.js';
import {inject, injectable} from 'inversify';
import {Component} from './types/component.types.js';
import {ControllerInterface} from './controller/controller.interface.js';
import cors from 'cors';

@injectable()
export default class Application {
  private expressApp: Express;

  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.JSONController) private JSONController: ControllerInterface
  ) {
    this.logger = logger;
    this.expressApp = express();
  }

  public initRoutes() {
    this.expressApp.use('/', this.JSONController.router);
  }

  public initMiddleware() {
    this.expressApp.use(express.json());
    this.expressApp.use(cors());
  }

  public init() {
    this.initMiddleware();
    this.initRoutes();
    this.expressApp.listen(3500);
    this.logger.info("Init Express on port 3500");
  }
}


