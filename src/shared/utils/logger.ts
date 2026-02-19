import pino from 'pino';

import { LoggerLevel } from '@/shared/enums/logger.enum';
import { NodeEnv } from '@/shared/enums/nodeEnv.enum';
import validatedEnv from '@/shared/validators/env';

const loggerConfig: pino.LoggerOptions = {
    level: validatedEnv.LOG_LEVEL || LoggerLevel.INFO,
};

if (validatedEnv.NODE_ENV === NodeEnv.LOCAL || validatedEnv.NODE_ENV === NodeEnv.TEST) {
    loggerConfig.transport = {
        target: 'pino-pretty',
        options: {
            colorize: true,
            levelFirst: true,
            singleLine: true,
            ignore: 'pid,hostname,reqId,context,awsRequestId',
            messageFormat: '{msg}',
        },
    };
}

const logger = pino(loggerConfig);

export default logger;
