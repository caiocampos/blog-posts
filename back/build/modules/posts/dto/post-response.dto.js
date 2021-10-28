"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var author_response_dto_1 = require("../../authors/dto/author-response.dto");
var PostResponseDTO = /** @class */ (function () {
    function PostResponseDTO(id, title, body, creationDate, author) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.author = author;
    }
    PostResponseDTO.from = function (_a) {
        var id = _a.id, title = _a.title, body = _a.body, creationDate = _a.creationDate, author = _a.author;
        return new PostResponseDTO(id.toHexString(), title, body, creationDate, author_response_dto_1.default.from(author));
    };
    return PostResponseDTO;
}());
exports.default = PostResponseDTO;
//# sourceMappingURL=post-response.dto.js.map