"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleController_1 = __importDefault(require("../app/controller/ExampleController"));
const route = express_1.default.Router();
route.get('/test', ExampleController_1.default.index);
route.get('/create', ExampleController_1.default.save);
exports.default = route;
