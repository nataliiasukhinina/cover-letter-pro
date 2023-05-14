// @ts-ignore
import awsConfig from '../aws-exports';
// @ts-ignore
import openAiConfig from '../openai';

export const environment = {
  amplify: awsConfig,
  openAiApiKey: openAiConfig.api_key,
  openAiOrganization: openAiConfig.organization_id
};
