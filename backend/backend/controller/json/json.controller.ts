import {inject, injectable} from 'inversify';
import {Controller} from '../controller.js';
import {Component} from '../../types/component.types.js';
import {LoggerInterface} from '../../logger/logger.interface.js';
import {HttpMethod} from '../../types/http-methods.enum.js';
import {Request, Response} from 'express';
import {FileReaderInterface} from '../../file-reader/file-reader.interface.js';
import {StatusCodes} from 'http-status-codes';
import JSONResponse from './json.response.js';
import {jsonType} from '../../types/json.types.js';

@injectable()
export default class JSONController extends Controller {
  private timeout: NodeJS.Timeout | null;
  constructor(
    @inject(Component.LoggerInterface) logger: LoggerInterface,
    @inject(Component.FileReader) private readonly fileReader: FileReaderInterface
  ) {
    super(logger);

    this.logger.info('Register routes JSONController...');
    fileReader.read();
    this.timeout = null;

    this.addRoute({path: '/', method: HttpMethod.Get, handler: this.index});
    this.addRoute({path: '/', method: HttpMethod.Post, handler: this.search});
  }

  public index(_req: Request, res: Response): void {
      const allRecords = this.fileReader.getData();
      this.send(res, StatusCodes.OK, allRecords);
  }

  public search({body}: Request<Record<string, unknown>, Record<string, unknown>, JSONResponse>, res: Response): void {
    const allRecords = this.fileReader.getData();
    let filteredRecords: jsonType = [];
    if (body.email) {
      filteredRecords = allRecords.filter(record => record.email === body.email);

      if(body.number) {
        filteredRecords = filteredRecords.filter(record => record.number === body.number);
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      if (filteredRecords.length === 0) {
        this.send(res, StatusCodes.NOT_FOUND, {error: 'Data not found'});
        throw new Error('Data not found');
      }

      this.timeout = setTimeout(() => this.send(res, StatusCodes.OK, filteredRecords),2000);
    } else {
      this.send(res, StatusCodes.BAD_REQUEST, {error: 'Email required'});
    }
  }
}