import { NextFunction, Request, Response } from 'express';
import { EApplicationEnvironment } from '../constant/application';
import { rateLimiterMongo } from '../config/rate-limiter';
import httpError from '../util/httpError';
import responseMessage from '../constant/responseMessage';
import config from '../config/config';

export default (req: Request, _: Response, next: NextFunction) => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return next();
    }
    if (rateLimiterMongo) {
        rateLimiterMongo
            .consume(req.ip as string, 1)
            .then(() => {
                next();
            })
            .catch(() => {
                httpError(next, new Error(responseMessage.TO_MANY_MESSAGES), req, 429);
            });
    }
};
