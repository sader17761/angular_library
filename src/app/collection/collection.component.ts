import { Component, OnInit } from '@angular/core';
import { Ibook } from '../ibook';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../services/data.service';
import { forEach } from '@angular/router/src/utils/collection';

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

  constructor(private _snackBar: MatSnackBar, private _dataService: DataService) {
    this.openingTime = new Date();
    this.openingTime.setHours(10, 0);
    this.closingTime = new Date();
    this.closingTime.setHours(15, 0);
    }

  ngOnInit(): void {
    // this.limit = 120; 
    // this.moreShown = false;
    // this._dataService.getBooks()
    // .subscribe(books => {
    //   this.books.push(books.items);
    // })
    // console.log("Book List: ", this.books);
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

  // updateMessage(message: string, type: string): void {
  //   if(message) {
  //     this._snackBar.open(`${type}: ${message}`, 'DISMISS', {
  //       duration: 3000
  //     });
  //   }
  // }

  // onRatingUpdate(book: Ibook): void {
  //   this.updateMessage(book.title, "Rating has been updated");
  // }

}
