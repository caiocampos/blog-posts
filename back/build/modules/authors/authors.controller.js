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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var post_add_request_dto_1 = require("../posts/dto/post-add-request.dto");
var authors_service_1 = require("./authors.service");
var author_add_request_dto_1 = require("./dto/author-add-request.dto");
var AuthorsController = /** @class */ (function () {
    function AuthorsController(authorsService) {
        this.authorsService = authorsService;
    }
    AuthorsController.prototype.findAll = function () {
        return this.authorsService.findAll();
    };
    AuthorsController.prototype.add = function (requestDto) {
        return this.authorsService.add(requestDto);
    };
    AuthorsController.prototype.addPost = function (id, requestDto) {
        return this.authorsService.addPost(id, requestDto);
    };
    AuthorsController.prototype.delete = function (id) {
        return this.authorsService.delete(id);
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AuthorsController.prototype, "findAll", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Request()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [author_add_request_dto_1.default]),
        __metadata("design:returntype", Promise)
    ], AuthorsController.prototype, "add", null);
    __decorate([
        common_1.Post(':id/posts'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Request()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, post_add_request_dto_1.default]),
        __metadata("design:returntype", Promise)
    ], AuthorsController.prototype, "addPost", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AuthorsController.prototype, "delete", null);
    AuthorsController = __decorate([
        common_1.Controller('authors'),
        __metadata("design:paramtypes", [authors_service_1.AuthorsService])
    ], AuthorsController);
    return AuthorsController;
}());
exports.AuthorsController = AuthorsController;
//# sourceMappingURL=authors.controller.js.map