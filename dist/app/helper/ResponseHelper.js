"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["FAILED"] = 400] = "FAILED";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
class ResponseHelper {
    success(res, responseData) {
        return res.send(responseData);
    }
    created(res, message) {
        return res.send(message);
    }
    failed(res, message) {
        return res.send(message);
    }
}
exports.default = new ResponseHelper();
