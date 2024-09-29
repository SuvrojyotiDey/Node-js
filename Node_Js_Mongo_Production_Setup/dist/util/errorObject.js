"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const application_1 = require("../constant/application");
const responseMessage_1 = __importDefault(require("../constant/responseMessage"));
const logger_1 = __importDefault(require("./logger"));
exports.default = (err, req, errorStatusCode = 500) => {
    const errorObj = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: (req === null || req === void 0 ? void 0 : req.ip) || null,
            method: req.method,
            url: req === null || req === void 0 ? void 0 : req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage_1.default.SOMETHING_WENT_WRONG : responseMessage_1.default.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    };
    logger_1.default.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    });
    if (config_1.default.ENV === application_1.EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip;
        delete errorObj.trace;
    }
    return errorObj;
};
//# sourceMappingURL=errorObject.js.map