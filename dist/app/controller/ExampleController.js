"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleController {
    index(req, res) {
        res.send({ message: "OK" });
    }
}
exports.default = new ExampleController();
