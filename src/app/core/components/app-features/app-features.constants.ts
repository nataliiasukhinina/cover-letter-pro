import {AppFeature} from "../../models/AppFeature";

export const appFeaturesList: AppFeature[] = [
  {
    header: 'AWS Amplify',
    subHeader: 'Hosting, Authentication',
    description: 'This application is hosted on AWS Amplify, which connects to the Git repository and allows for continuous deployment from the selected branch. AWS Amplify also provides authentication and user management services.'
  }, {
    header: 'OpenAI API',
    subHeader: 'API Integration',
    description: 'This application takes user input and sends it to OpenAI as part of a POST API request. The response is then displayed back to the user.'
  }, {
    header: 'API Key Storage',
    subHeader: 'API Integration',
    description: 'The OpenAI API key is stored securely in AWS managed service and is retrieved during deployment.'
  }, {
    header: 'Reactive Forms',
    subHeader: 'Angular Framework',
    description: 'This application uses Angular Reactive Forms to create forms, and a custom validator was created to enforce password matching.',
    footnote: 'Use of built-in and custom validators'
  }, {
    header: 'Route Guard',
    subHeader: 'Angular Framework, Authentication',
    description: 'A route guard was implemented to prevent un-authenticated users from accessing some of the pages of the application.',
  }, {
    header: 'HTTP Interceptor',
    subHeader: 'Angular Framework, API Integration',
    description: 'An HTTP interceptor was created to add authentication headers to requests made to the OpenAI GPT-3.5 API.',
  }, {
    header: 'Angular Material and Bootstrap',
    subHeader: 'Design',
    description: 'The application\'s page elements are implemented with Angular Material and Bootstrap.',
  }
];
