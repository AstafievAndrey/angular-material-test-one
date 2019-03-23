import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get (url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        tap(_ => console.log(`get "${url}"`)),
        catchError(err =>  Observable.throw(this.handleError(err)))
      );
  }

  post (url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data)
      .pipe(
        tap(_ => console.log(`post "${url}"`)),
        catchError(err =>  Observable.throw(this.handleError(err)))
      );
  }

  private handleError(error: HttpErrorResponse) {
    return (error: any): Observable<any> => {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.')
    };
  }
}
