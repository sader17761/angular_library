import { Injectable } from '@angular/core';
import { Ibook } from '../ibook';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  _googleBookApi: string = "https://www.googleapis.com/books/v1/volumes?"
  //_booksUrl: string = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
  _apiKey: string = "169f33c61d314ddda32ffdb03b7416b7";
  _age: number = 7;
  _bookDetails = {};

  constructor(private _http: Http) { }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?
    `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getBooks(input: string): Observable<any>{
    return this._http.get(`${this._googleBookApi}` + 'q=' + input + '&maxResults=40&orderBy=newest')
    .map(response => response.json());
  }

  getBook(id: string): Observable<any> {
    console.log("Passed Id: ", id)
    return this._http.get(`${this._googleBookApi}` + 'q=' + id)
    .map(response => response.json());
  }

  postBookDetails(book: object) {
    this._bookDetails = book;
    console.log("Book details passed to service: ", this._bookDetails);
  }

}
