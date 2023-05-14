// @ts-ignore
import awsconfig from '../aws-exports';
// @ts-ignore
import openAiConfig from '../openai';

export const environment = {
  amplify: awsconfig,
  openAiApiKey: openAiConfig.api_key,
  openAiOrganization: openAiConfig.organization_id
};
