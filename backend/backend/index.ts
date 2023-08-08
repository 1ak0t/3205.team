import 'reflect-metadata'
import Application from './application.js';
import LoggerService from './logger/logger.service.js';
import {Container} from 'inversify';
import {Component} from './types/component.types.js';
import {LoggerInterface} from './logger/logger.interface.js';
import {ControllerInterface} from './controller/controller.interface.js';
import JSONController from './controller/json/json.controller.js';
import {FileReaderInterface} from './file-reader/file-reader.interface.js';
import FileReader from './file-reader/file-reader.js';

const applicationContainer = new Container();
applicationContainer.bind<Application>(Component.Application).to(Application);
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService);
applicationContainer.bind<FileReaderInterface>(Component.FileReader).to(FileReader);
applicationContainer.bind<ControllerInterface>(Component.JSONController).to(JSONController).inSingletonScope();

const application = applicationContainer.get<Application>(Component.Application);
application.init();