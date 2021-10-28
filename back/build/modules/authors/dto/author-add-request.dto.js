"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var validation_messages_constants_1 = require("../../../common/messages/validation-messages.constants");
var AuthorAddRequestDTO = /** @class */ (function () {
    function AuthorAddRequestDTO() {
    }
    __decorate([
        class_validator_1.IsNotEmpty({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
        __metadata("design:type", String)
    ], AuthorAddRequestDTO.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
        __metadata("design:type", String)
    ], AuthorAddRequestDTO.prototype, "nickname", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
        class_validator_1.IsDateString({}, { message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
        __metadata("design:type", String)
    ], AuthorAddRequestDTO.prototype, "birthDate", void 0);
    return AuthorAddRequestDTO;
}());
exports.default = AuthorAddRequestDTO;
//# sourceMappingURL=author-add-request.dto.js.map