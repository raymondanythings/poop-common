"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_KEY = exports.Gender = exports.Provider = exports.EmailTemplateName = exports.MANAGER_KEY = void 0;
exports.MANAGER_KEY = "COMMON_MANAGER_KEY";
var EmailTemplateName;
(function (EmailTemplateName) {
    EmailTemplateName["CONFIRM_EMAIL"] = "confirm_email";
})(EmailTemplateName || (exports.EmailTemplateName = EmailTemplateName = {}));
var Provider;
(function (Provider) {
    Provider["KAKAO"] = "KAKAO";
    Provider["APPLE"] = "APPLE";
    Provider["GOOGLE"] = "GOOGLE";
    Provider["CREDENTIAL"] = "CREDENTIAL";
})(Provider || (exports.Provider = Provider = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["NONE"] = "NONE";
})(Gender || (exports.Gender = Gender = {}));
exports.TOKEN_KEY = "x-poop-ci";
//# sourceMappingURL=index.js.map