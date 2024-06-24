import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  baseUrl = 'https://api.openai.com/v1'

  constructor(private httpClient: HttpClient) { }

  getCompletion(body: any): Observable<any> {
    console.log(body)
    const url: string = `${this.baseUrl}/chat/completions`;
    return this.httpClient.post(url, body);
  }
}
