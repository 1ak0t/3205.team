"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const application_1 = __importDefault(require("./application"));
const logger_service_1 = __importDefault(require("./logger/logger.service"));
const inversify_1 = require("inversify");
const component_types_1 = require("./types/component.types");
const json_controller_1 = __importDefault(require("./controller/json/json.controller"));
const file_reader_1 = __importDefault(require("./file-reader/file-reader"));
const applicationContainer = new inversify_1.Container();
applicationContainer.bind(component_types_1.Component.Application).to(application_1.default);
applicationContainer.bind(component_types_1.Component.LoggerInterface).to(logger_service_1.default);
applicationContainer.bind(component_types_1.Component.FileReader).to(file_reader_1.default);
applicationContainer.bind(component_types_1.Component.JSONController).to(json_controller_1.default).inSingletonScope();
const application = applicationContainer.get(component_types_1.Component.Application);
application.init();
