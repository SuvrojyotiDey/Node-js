"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = __importDefault(require("../controller/apiController"));
const rateLimiter_1 = __importDefault(require("../middleware/rateLimiter"));
const router = (0, express_1.Router)();
router.use(rateLimiter_1.default);
router.route('/self').get(apiController_1.default.self);
router.route('/health').get(apiController_1.default.health);
exports.default = router;
//# sourceMappingURL=apiRouter.js.map