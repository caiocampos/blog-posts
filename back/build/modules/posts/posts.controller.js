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
var posts_service_1 = require("./posts.service");
var PostsController = /** @class */ (function () {
    function PostsController(postsService) {
        this.postsService = postsService;
    }
    PostsController.prototype.findAll = function (authorName) {
        return this.postsService.findAll(authorName);
    };
    PostsController.prototype.delete = function (id) {
        return this.postsService.delete(id);
    };
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query('authorName')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "findAll", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], PostsController.prototype, "delete", null);
    PostsController = __decorate([
        common_1.Controller('posts'),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostsController);
    return PostsController;
}());
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map