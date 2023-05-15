// @ts-ignore
import awsConfig from '../aws-exports';
import {openAiApiKey, openAiOrganizationId} from "../openai-config";

export const environment = {
  production: false,
  amplify: awsConfig,
  openAiApiKey: openAiApiKey,
  openAiOrganizationId: openAiOrganizationId
};
