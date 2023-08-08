import { __decorate, __metadata } from "tslib";
import { IsEmail } from 'class-validator';
export default class JSONResponse {
}
__decorate([
    IsEmail({}, { message: 'email must be a valid address' }),
    __metadata("design:type", String)
], JSONResponse.prototype, "email", void 0);
//# sourceMappingURL=json.response.js.map