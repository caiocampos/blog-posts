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
var posts_repository_1 = require("../posts/posts.repository");
var authors_controller_1 = require("./authors.controller");
var authors_repository_1 = require("./authors.repository");
var authors_service_1 = require("./authors.service");
var AuthorsModule = /** @class */ (function () {
    function AuthorsModule() {
    }
    AuthorsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([authors_repository_1.AuthorsRepository, posts_repository_1.PostsRepository])],
            providers: [authors_service_1.AuthorsService],
            controllers: [authors_controller_1.AuthorsController],
            exports: [],
        })
    ], AuthorsModule);
    return AuthorsModule;
}());
exports.AuthorsModule = AuthorsModule;
//# sourceMappingURL=authors.module.js.map