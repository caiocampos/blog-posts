/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const authors_module_1 = __webpack_require__(4);
const posts_module_1 = __webpack_require__(17);
const config_1 = __webpack_require__(20);
const mongoose_1 = __webpack_require__(5);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            authors_module_1.AuthorsModule,
            posts_module_1.PostsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(5);
const post_entity_1 = __webpack_require__(6);
const author_entity_1 = __webpack_require__(8);
const authors_controller_1 = __webpack_require__(9);
const authors_service_1 = __webpack_require__(13);
let AuthorsModule = class AuthorsModule {
};
AuthorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Author', schema: author_entity_1.AuthorSchema },
                { name: 'Post', schema: post_entity_1.PostSchema },
            ]),
        ],
        providers: [authors_service_1.AuthorsService],
        controllers: [authors_controller_1.AuthorsController],
        exports: [],
    })
], AuthorsModule);
exports.AuthorsModule = AuthorsModule;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(7);
const author_entity_1 = __webpack_require__(8);
let Post = class Post {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Post.prototype, "creationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Author' }),
    __metadata("design:type", typeof (_a = typeof author_entity_1.AuthorDocument !== "undefined" && author_entity_1.AuthorDocument) === "function" ? _a : Object)
], Post.prototype, "author", void 0);
Post = __decorate([
    (0, mongoose_1.Schema)({ collection: 'posts' })
], Post);
exports.Post = Post;
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorSchema = exports.Author = void 0;
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(7);
let Author = class Author {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "realname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "nickname", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Author.prototype, "birthDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Post' }] }),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], Author.prototype, "posts", void 0);
Author = __decorate([
    (0, mongoose_1.Schema)({ collection: 'authors' })
], Author);
exports.Author = Author;
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsController = void 0;
const common_1 = __webpack_require__(1);
const post_add_request_dto_1 = __webpack_require__(10);
const authors_service_1 = __webpack_require__(13);
const author_add_request_dto_1 = __webpack_require__(16);
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    count() {
        return this.authorsService.count();
    }
    findAll() {
        return this.authorsService.findAll();
    }
    add(requestDto) {
        return this.authorsService.add(requestDto);
    }
    addPost(id, requestDto) {
        return this.authorsService.addPost(id, requestDto);
    }
    delete(id) {
        return this.authorsService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AuthorsController.prototype, "count", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof author_add_request_dto_1.default !== "undefined" && author_add_request_dto_1.default) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthorsController.prototype, "add", null);
__decorate([
    (0, common_1.Post)(':id/posts'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof post_add_request_dto_1.default !== "undefined" && post_add_request_dto_1.default) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthorsController.prototype, "addPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "delete", null);
AuthorsController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [typeof (_g = typeof authors_service_1.AuthorsService !== "undefined" && authors_service_1.AuthorsService) === "function" ? _g : Object])
], AuthorsController);
exports.AuthorsController = AuthorsController;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(11);
const validation_messages_constants_1 = __webpack_require__(12);
class PostAddRequestDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], PostAddRequestDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], PostAddRequestDTO.prototype, "body", void 0);
exports["default"] = PostAddRequestDTO;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationMessages = void 0;
exports.ValidationMessages = Object.freeze({
    IS_NOT_EMPTY: 'Campo $property não pode ser vazio.',
    IS_NOT_DATE: 'Campo $property não é uma data válida.',
});


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var AuthorsService_1, _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(11);
const mongoose_2 = __webpack_require__(7);
const post_response_dto_1 = __webpack_require__(14);
const author_response_dto_1 = __webpack_require__(15);
const { ObjectId } = mongoose_2.Types;
let AuthorsService = AuthorsService_1 = class AuthorsService {
    constructor(authorModel, postModel) {
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new common_1.Logger(AuthorsService_1.name);
    }
    async count() {
        try {
            return await this.authorModel.count().exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao contar os autores', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const authors = await this.authorModel.find().exec();
            return authors.map(author_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar os autores', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        const _id = new ObjectId(id);
        const author = await this.authorModel.findById(_id).exec();
        return author_response_dto_1.default.from(author);
    }
    async add(requestDto) {
        await (0, class_validator_1.validateOrReject)(requestDto);
        try {
            const newAuthor = new this.authorModel();
            newAuthor.realname = requestDto.name;
            newAuthor.nickname = requestDto.nickname;
            newAuthor.birthDate = requestDto.birthDate;
            const author = await newAuthor.save();
            return author_response_dto_1.default.from(author);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar o autor', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async addPost(id, requestDto) {
        await (0, class_validator_1.validateOrReject)(requestDto);
        try {
            const newPost = new this.postModel(requestDto);
            const _id = new ObjectId(id);
            const author = await this.authorModel.findById(_id).exec();
            newPost.author = author;
            newPost.creationDate = new Date().toISOString().slice(0, 10);
            const post = await newPost.save();
            return post_response_dto_1.default.from(post);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao gravar a postagem', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const _id = new ObjectId(id);
            return await this.authorModel.findByIdAndDelete(_id).exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao apagar o autor', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AuthorsService = AuthorsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Author')),
    __param(1, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], AuthorsService);
exports.AuthorsService = AuthorsService;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const author_response_dto_1 = __webpack_require__(15);
class PostResponseDTO {
    constructor(id, title, body, creationDate, author) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
}
exports["default"] = PostResponseDTO;
PostResponseDTO.from = ({ _id, title, body, creationDate, author, }) => new PostResponseDTO(_id.toHexString(), title, body, creationDate, author_response_dto_1.default.from(author));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class AuthorResponseDTO {
    constructor(id, name, nickname, birthDate, posts) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
}
exports["default"] = AuthorResponseDTO;
AuthorResponseDTO.from = ({ _id, realname, nickname, birthDate, posts, }) => new AuthorResponseDTO(_id.toHexString(), realname, nickname, birthDate, posts);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const class_validator_1 = __webpack_require__(11);
const validation_messages_constants_1 = __webpack_require__(12);
class AuthorAddRequestDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "nickname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    (0, class_validator_1.IsDateString)({}, { message: validation_messages_constants_1.ValidationMessages.IS_NOT_EMPTY }),
    __metadata("design:type", String)
], AuthorAddRequestDTO.prototype, "birthDate", void 0);
exports["default"] = AuthorAddRequestDTO;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(5);
const author_entity_1 = __webpack_require__(8);
const post_entity_1 = __webpack_require__(6);
const posts_controller_1 = __webpack_require__(18);
const posts_service_1 = __webpack_require__(19);
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Author', schema: author_entity_1.AuthorSchema },
                { name: 'Post', schema: post_entity_1.PostSchema },
            ]),
        ],
        providers: [posts_service_1.PostsService],
        controllers: [posts_controller_1.PostsController],
        exports: [],
    })
], PostsModule);
exports.PostsModule = PostsModule;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsController = void 0;
const common_1 = __webpack_require__(1);
const posts_service_1 = __webpack_require__(19);
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    findAll(authorName) {
        return this.postsService.findAll(authorName);
    }
    delete(id) {
        return this.postsService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('authorName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "delete", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [typeof (_b = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" ? _b : Object])
], PostsController);
exports.PostsController = PostsController;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var PostsService_1, _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsService = void 0;
const common_1 = __webpack_require__(1);
const post_response_dto_1 = __webpack_require__(14);
const mongoose_1 = __webpack_require__(5);
const mongoose_2 = __webpack_require__(7);
let PostsService = PostsService_1 = class PostsService {
    constructor(authorModel, postModel) {
        this.authorModel = authorModel;
        this.postModel = postModel;
        this.logger = new common_1.Logger(PostsService_1.name);
    }
    async findAll(authorName) {
        try {
            let query = this.postModel.find();
            if (authorName) {
                const authors = await this.authorModel
                    .find()
                    .where('realname')
                    .regex(new RegExp(authorName, 'i'))
                    .select('id')
                    .exec();
                query = query.where('author').in(authors.map((author) => author._id));
            }
            const posts = await query.populate('author').sort('-creationDate').exec();
            return posts.map(post_response_dto_1.default.from);
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao buscar as postagens', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const _id = new mongoose_2.Types.ObjectId(id);
            return await this.postModel.findByIdAndDelete(_id).exec();
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao apagar a postagem', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
PostsService = PostsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Author')),
    __param(1, (0, mongoose_1.InjectModel)('Post')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], PostsService);
exports.PostsService = PostsService;


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(3000);
};
bootstrap();

})();

/******/ })()
;