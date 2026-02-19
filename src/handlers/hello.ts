import costExplorer from '@/clients/costExplorer';
import logger from '@/shared/utils/logger';
import { GetCostAndUsageCommand } from '@aws-sdk/client-cost-explorer';
import { APIGatewayProxyHandler } from 'aws-lambda';
import dayjs from 'dayjs';

export const handler: APIGatewayProxyHandler = async () => {
    const command = new GetCostAndUsageCommand({
        TimePeriod: {
            Start: dayjs().subtract(1, 'day').toISOString(),
            End: dayjs().toISOString(),
        },
        Granularity: 'DAILY',
        Metrics: ['LINKED_ACCOUNT'],
    });

    logger.info(command);

    const cost = await costExplorer.send(command);

    logger.info(cost);

    return {
        statusCode: 200,
        body: JSON.stringify({
            cost,
            message: 'Hello from Serverless 🚀',
        }),
    };
};
