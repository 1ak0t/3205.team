import {IsEmail} from 'class-validator';

export default class JSONResponse {
  @IsEmail({}, {message: 'email must be a valid address'})
  public email!: string;
  public number?: string;
}