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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var class_validator_1 = require("class-validator");
var typeorm_2 = require("typeorm");
var post_response_dto_1 = require("../posts/dto/post-response.dto");
var posts_repository_1 = require("../posts/posts.repository");
var authors_repository_1 = require("./authors.repository");
var author_response_dto_1 = require("./dto/author-response.dto");
var AuthorsService = /** @class */ (function () {
    function AuthorsService(repository, postRepository) {
        this.repository = repository;
        this.postRepository = postRepository;
        this.logger = new common_1.Logger(AuthorsService_1.name);
    }
    AuthorsService_1 = AuthorsService;
    AuthorsService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1:
                        authors = _a.sent();
                        return [2 /*return*/, authors.map(author_response_dto_1.default.from)];
                }
            });
        });
    };
    AuthorsService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectID, author;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectID = typeorm_2.ObjectID.createFromHexString(id);
                        return [4 /*yield*/, this.repository.findOne(objectID)];
                    case 1:
                        author = _a.sent();
                        return [2 /*return*/, author_response_dto_1.default.from(author)];
                }
            });
        });
    };
    AuthorsService.prototype.addPost = function (id, requestDto) {
        return __awaiter(this, void 0, void 0, function () {
            var objectID, author, newPost, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validateOrReject(requestDto)];
                    case 1:
                        _a.sent();
                        objectID = typeorm_2.ObjectID.createFromHexString(id);
                        return [4 /*yield*/, this.repository.findOne(objectID)];
                    case 2:
                        author = _a.sent();
                        newPost = requestDto;
                        newPost.author = author;
                        return [4 /*yield*/, this.postRepository.save(newPost)];
                    case 3:
                        post = _a.sent();
                        return [2 /*return*/, post_response_dto_1.default.from(post)];
                }
            });
        });
    };
    AuthorsService.prototype.add = function (requestDto) {
        return __awaiter(this, void 0, void 0, function () {
            var author;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validateOrReject(requestDto)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repository.save(requestDto)];
                    case 2:
                        author = _a.sent();
                        return [2 /*return*/, author_response_dto_1.default.from(author)];
                }
            });
        });
    };
    AuthorsService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        objectID = typeorm_2.ObjectID.createFromHexString(id);
                        return [4 /*yield*/, this.repository.delete(objectID)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var AuthorsService_1;
    AuthorsService = AuthorsService_1 = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(authors_repository_1.AuthorsRepository)),
        __param(1, typeorm_1.InjectRepository(authors_repository_1.AuthorsRepository)),
        __metadata("design:paramtypes", [authors_repository_1.AuthorsRepository,
            posts_repository_1.PostsRepository])
    ], AuthorsService);
    return AuthorsService;
}());
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map