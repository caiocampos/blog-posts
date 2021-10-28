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
var typeorm_1 = require("typeorm");
var author_entity_1 = require("../authors/author.entity");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        __metadata("design:type", typeorm_1.ObjectID)
    ], Post.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Post.prototype, "body", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Post.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return author_entity_1.Author; }, function (author) { return author.posts; }),
        __metadata("design:type", author_entity_1.Author)
    ], Post.prototype, "author", void 0);
    Post = __decorate([
        typeorm_1.Entity({ name: 'posts' })
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map