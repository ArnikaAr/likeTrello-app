import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

class Board {
  constructor() {}
}



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public boards: FirebaseListObservable<Board[]>;

  constructor(db: AngularFireDatabase) {
    this.boards =  db.list('boards');
    console.log(this.boards.valueChanges());
  }

  ngOnInit() {
  }

}
