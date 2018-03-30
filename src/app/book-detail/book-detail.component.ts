import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material';
import { Subscribable } from 'rxjs/Observable';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [DataService]
})
export class BookDetailComponent implements OnInit {

  bookId: string;
  sub: Subscription;
  book = {};

  constructor(private _route: ActivatedRoute, private _router: Router, private _dataService: DataService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // if(!this.bookId) {
    //   this.sub = this._route.params.subscribe(
    //     params => {
    //       let id = params['id'];
    //       this.getBook(id);
    //     });
    //     return;
    // }
    // this.getBook(this.bookId);
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  // getBook(id: string): void {
  //   this._dataService.getBook(id).subscribe(
  //     book => this.book = book)
  //     //error => this.updateMessage(<any>error, 'Error'));
  // }

}
