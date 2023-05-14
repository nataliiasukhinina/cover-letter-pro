// @ts-ignore
import awsconfig from '../aws-exports';
import * as process from "process";

export const environment = {
  amplify: awsconfig,
  openAiApiKey: process.env['OPENAI_API_KEY'],
  openAiOrganization: 'org-KOOCC1Ru8jtVOg1g6ycSKGpf'
};
