import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {


  VOTE_PERCENT=[0,0,0,0,0];
  VOTE_SCORE:number[]=[0,0,0,0,0];



  constructor() { }

  ngOnInit(): void {}

  onVoted(e:any){
    this.VOTE_SCORE[e-1]=this.VOTE_SCORE[e-1]+1;
  }

}
