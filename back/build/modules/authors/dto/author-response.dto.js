"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorResponseDTO = /** @class */ (function () {
    function AuthorResponseDTO(id, name, nickname, birthDate, posts) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.posts = posts;
    }
    AuthorResponseDTO.from = function (_a) {
        var id = _a.id, name = _a.name, nickname = _a.nickname, birthDate = _a.birthDate, posts = _a.posts;
        return new AuthorResponseDTO(id.toHexString(), name, nickname, birthDate, posts);
    };
    return AuthorResponseDTO;
}());
exports.default = AuthorResponseDTO;
//# sourceMappingURL=author-response.dto.js.map