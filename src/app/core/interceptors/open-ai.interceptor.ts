import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";
// import * as aws from 'aws-sdk';

@Injectable()
export class OpenAiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {

    if (httpRequest.url.includes('https://api.openai.com/v1')) {

      const openAiRequest: HttpRequest<any> = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${environment.openAiApiKey}`,
          'OpenAI-Organization': environment.openAiOrganization
        }
      });
      return next.handle(openAiRequest);
    } else {
      return next.handle(httpRequest);
    }
  }

}
