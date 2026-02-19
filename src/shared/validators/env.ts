import * as yup from 'yup';
import { NodeEnv } from '../enums/nodeEnv.enum';

const envSchema = yup.object().shape({
    REGION: yup.string().required(),
    MAX_ATTEMPTS: yup.number().min(1).max(5).default(3),
    LOG_LEVEL: yup.string().required(),
    NODE_ENV: yup.string().oneOf(Object.values(NodeEnv)),
});

const validatedEnv = envSchema.validateSync(process.env, {
    abortEarly: true,
});

export default validatedEnv;
