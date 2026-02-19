import validatedEnv from '@/shared/validators/env';
import { CostExplorerClient } from '@aws-sdk/client-cost-explorer';

const costExplorer = new CostExplorerClient({
    region: validatedEnv.REGION,
    maxAttempts: validatedEnv.MAX_ATTEMPTS,
});

export default costExplorer;
