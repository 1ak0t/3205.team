import { jsonType } from '../types/json.types.js';
export interface FileReaderInterface {
    read(): void;
    getData(): jsonType;
}
