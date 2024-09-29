"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const rate_limiter_1 = require("./config/rate-limiter");
const dataBaseService_1 = __importDefault(require("./service/dataBaseService"));
const logger_1 = __importDefault(require("./util/logger"));
const server = app_1.default.listen(config_1.default.PORT);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield dataBaseService_1.default.connect();
        logger_1.default.info(`DATABASE_CONNECTION`, {
            meta: {
                CONNECTION_NAME: connection.name
            }
        });
        (0, rate_limiter_1.initRateLimiter)(connection);
        logger_1.default.info(`RATE_LIMITER_INITIATED`);
        logger_1.default.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config_1.default.PORT,
                SERVER_URL: config_1.default.SERVER_URL
            }
        });
    }
    catch (error) {
        logger_1.default.error(`APPLICATION_ERROR`, { meta: error });
        server.close((error) => {
            if (error) {
                logger_1.default.error(`APPLICATION_ERROR`, { meta: error });
            }
            process.exit(1);
        });
    }
}))();
//# sourceMappingURL=server.js.map