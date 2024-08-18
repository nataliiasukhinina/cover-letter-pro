import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { secret } from '@aws-amplify/backend';

@Injectable()
export class OpenAiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
    if (httpRequest.url.includes('https://api.openai.com/v1')) {
      const openAiRequest: HttpRequest<any> = httpRequest.clone({
        setHeaders: {
          // @ts-ignore
          Authorization: `Bearer ${secret('OpenAiApiKey')}`,
          'OpenAI-Organization': environment.openAiOrganization,
        },
      });
      return next.handle(openAiRequest);
    } else {
      return next.handle(httpRequest);
    }
  }
}
