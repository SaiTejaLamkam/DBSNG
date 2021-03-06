import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest,
  HttpHandler, HttpEvent, HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>>{
   return next.handle(req)
   .pipe(
      catchError(this.handleError)
    )
   };

   handleError(error: HttpErrorResponse){
    console.log("Error");
    return throwError(error);
   }
}
