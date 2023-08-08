import 'reflect-metadata';
import Application from './application.js';
import LoggerService from './logger/logger.service.js';
import { Container } from 'inversify';
import { Component } from './types/component.types.js';
import JSONController from './controller/json/json.controller.js';
import FileReader from './file-reader/file-reader.js';
const applicationContainer = new Container();
applicationContainer.bind(Component.Application).to(Application);
applicationContainer.bind(Component.LoggerInterface).to(LoggerService);
applicationContainer.bind(Component.FileReader).to(FileReader);
applicationContainer.bind(Component.JSONController).to(JSONController).inSingletonScope();
const application = applicationContainer.get(Component.Application);
application.init();
//# sourceMappingURL=index.js.map