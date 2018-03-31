import { Component, OnInit } from '@angular/core';
import { Ibook } from '../ibook';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  pageTitle: string;

  books = [];
  allBooks = [];
  showOperatingHours: boolean;
  openingTime: Date;
  closingTime: Date;
  limit: number;
  moreShown: boolean;
  inputValue = "";
  src = "";
  _bookDetails = {};

  constructor(private _snackBar: MatSnackBar, private _dataService: DataService, private _dialog: MatDialog,
  private _router: Router) {
    this.openingTime = new Date();
    this.openingTime.setHours(10, 0);
    this.closingTime = new Date();
    this.closingTime.setHours(15, 0);
    }

  ngOnInit(): void {
  }

  openDialog(book: object): void {
    this._bookDetails = book;
    console.log("Details returned: ", this._bookDetails)
    let config = {width: '1020px', height: 'auto', position: {top: '50px'}};
    let dialogRef = this._dialog.open(BookDetailComponent, config);
    dialogRef.componentInstance.book = book;
    dialogRef.afterClosed().subscribe(res => {
      
    })
  }

  searchBooks(input: string): void {
    console.log("Search for: ", this.inputValue);
    this.books = [];
    this._dataService.getBooks(input)
    .subscribe(books => {
      this.books.push(books.items);
    })
    console.log("Returned Books: ", this.books);
  }

  updateUrl(event) {
    console.log("Event: ", event)
    this.src = "assets/no-cover.png";
  }

  keyDownSearch(event, input: string): void {
    if(event.keyCode == 13) {
      console.log("Inside key press with input: ", input);
      this.searchBooks(input);
    }
  }

}
