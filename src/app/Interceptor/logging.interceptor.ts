import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    // Clone the request and set the new headers
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`  // Add the token in the 'Authorization' header
      }
    });
    return next.handle(modifiedRequest);
  }
}
