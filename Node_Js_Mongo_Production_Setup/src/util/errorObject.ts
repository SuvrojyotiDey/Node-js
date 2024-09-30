import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';
import responseMessage from '../constant/responseMessage';
import { THttpError } from '../types/types';
import { Request } from 'express';
import logger from './logger';

export default (err: unknown, req: Request, errorStatusCode: number = 500): THttpError => {
    const errorObj: THttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req?.ip || null,
            method: req.method,
            url: req?.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    };
    logger.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    });
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip;
        delete errorObj.trace;
    }
    return errorObj;
};
