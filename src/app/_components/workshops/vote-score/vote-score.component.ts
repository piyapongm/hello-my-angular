import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-score',
  templateUrl: './vote-score.component.html',
  styleUrls: ['./vote-score.component.scss']
})
export class VoteScoreComponent implements OnInit {

  @Input() SCORE:number[]=[];

  constructor() { }
  ngOnInit(): void {}

}
