import { Controller } from '../controller.js';
import { LoggerInterface } from '../../logger/logger.interface.js';
import { Request, Response } from 'express';
import { FileReaderInterface } from '../../file-reader/file-reader.interface.js';
import JSONResponse from './json.response.js';
export default class JSONController extends Controller {
    private readonly fileReader;
    private timeout;
    constructor(logger: LoggerInterface, fileReader: FileReaderInterface);
    index(_req: Request, res: Response): void;
    search({ body }: Request<Record<string, unknown>, Record<string, unknown>, JSONResponse>, res: Response): void;
}
