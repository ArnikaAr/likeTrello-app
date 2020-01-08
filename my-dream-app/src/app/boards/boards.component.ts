import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs';

class Board {
  constructor() {}
}



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boardRef: AngularFireObject<any>;
   boards: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.boardRef = db.object('boards');
    this.boards =  this.boardRef.valueChanges();

    console.log(this.boards);
  }

  ngOnInit() {
  }

}
