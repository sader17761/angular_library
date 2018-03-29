import { Injectable } from '@angular/core';
import { Ibook } from '../ibook';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  _googleBookApi: string = "https://www.googleapis.com/books/v1/volumes?q=Rowling"
  _booksUrl: string = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
  _apiKey: string = "169f33c61d314ddda32ffdb03b7416b7";
  _age: number = 7;

  constructor(private _http: Http) { }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ?
    `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getBooks(): Observable<any>{
    return this._http.get(`${this._googleBookApi}`)
    .map(response => response.json());
  }

  // getBooks(): Observable<Ibook[]> {
  //   return this._http.get(this._booksUrl + "/GetBooks")
  //   // return this._http.get(this._booksUrl += '?' + $.param({
  //   //   'api-key': "169f33c61d314ddda32ffdb03b7416b7",
  //   //   'list': "Childrens Middle Grade"
  //   // })
  //   .map((response: Response) => {
  //     let data: Ibook[] = <Ibook[]>response.json();
  //     return data;
  //   })
  //   .catch(this.handleError);
  // }

  // getBooks(): Array<Ibook> {
  //   return [
  //     {
  //       id: 1,
  //       title: "JavaScript - The Good Parts",
  //       author: "Douglas Crockford",
  //       isCheckedOut: true,
  //       rating: 3
  //     },
  //     {
  //       id: 2,
  //       title: "The Wind in the Willows",
  //       author: "Kenneth Grahame",
  //       isCheckedOut: false,
  //       rating: 4
  //     },
  //     {
  //       id: 3,
  //       title: "Pillars of the Earth",
  //       author: "Ken Follett",
  //       isCheckedOut: true,
  //       rating: 5
  //     },
  //     {
  //       id: 4,
  //       title: "Harry Potter and the Prisoner of Azkaban",
  //       author: "J.K. Rowling",
  //       isCheckedOut: false,
  //       rating: 5
  //     }
  //   ]
  // }

}
