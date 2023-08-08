import {FileReaderInterface} from './file-reader.interface.js';
import {readFileSync} from 'fs';
import {injectable} from 'inversify';
import {MOCK_FILE} from '../constants/constants.js';
import {jsonType} from '../types/json.types.js';

@injectable()
export default class FileReader implements FileReaderInterface {
  private rawData: jsonType = [];

  constructor() {}

  public read() {
    this.rawData = JSON.parse(readFileSync(MOCK_FILE, {encoding: 'utf-8'}));
  }

  public getData() {
    return this.rawData;
  }
}