"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var posts_controller_1 = require("./posts.controller");
var posts_repository_1 = require("./posts.repository");
var posts_service_1 = require("./posts.service");
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([posts_repository_1.PostsRepository])],
            providers: [posts_service_1.PostsService],
            controllers: [posts_controller_1.PostsController],
            exports: [],
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map