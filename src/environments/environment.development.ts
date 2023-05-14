// @ts-ignore
import awsconfig from '../aws-exports';

export const environment = {
  amplify: awsconfig,
  openAiApiKey: process.env['OPENAI_API_KEY']
};
