import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote-buttom',
  templateUrl: './vote-buttom.component.html',
  styleUrls: ['./vote-buttom.component.scss']
})
export class VoteButtomComponent implements OnInit {

  @Output() voted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public vote(n:number){
    this.voted.emit(n);
  }
}
