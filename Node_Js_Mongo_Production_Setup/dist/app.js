"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const apiRouter_1 = __importDefault(require("./router/apiRouter"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const responseMessage_1 = __importDefault(require("./constant/responseMessage"));
const httpError_1 = __importDefault(require("./util/httpError"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: '*',
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
app.use('/api/v1', apiRouter_1.default);
app.use((req, _, next) => {
    try {
        throw new Error(responseMessage_1.default.NOT_FOUND('Route'));
    }
    catch (err) {
        (0, httpError_1.default)(next, err, req, 404);
    }
});
app.use(globalErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map