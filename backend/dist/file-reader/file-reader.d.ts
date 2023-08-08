import { FileReaderInterface } from './file-reader.interface.js';
import { jsonType } from '../types/json.types.js';
export default class FileReader implements FileReaderInterface {
    private rawData;
    constructor();
    read(): void;
    getData(): jsonType;
}
