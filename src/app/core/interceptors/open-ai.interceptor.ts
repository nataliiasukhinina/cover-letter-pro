import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class OpenAiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {

    if (httpRequest.url.includes('https://api.openai.com/v1')) {

      const openAiRequest: HttpRequest<any> = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${process.env['OPENAI_API_KEY']}`,
          'OpenAI-Organization': 'org-KOOCC1Ru8jtVOg1g6ycSKGpf'
        }
      });
      return next.handle(openAiRequest);
    } else {
      return next.handle(httpRequest);
    }
  }

}
