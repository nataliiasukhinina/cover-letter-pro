import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class OpenAiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {

    if (httpRequest.url.includes('https://api.openai.com/v1')) {

      const openAiRequest: HttpRequest<any> = httpRequest.clone({
        setHeaders: {
          // @ts-ignore
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
          // @ts-ignore
          'OpenAI-Organization': process.env.OPENAI_ORG
        }
      });
      return next.handle(openAiRequest);
    } else {
      return next.handle(httpRequest);
    }
  }

}
