import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-display',
  templateUrl: './vote-display.component.html',
  styleUrls: ['./vote-display.component.scss']
})
export class VoteDisplayComponent implements OnInit {

  @Input() SCORE:number[]=[];
  constructor() { }
  ngOnInit(): void {

  }

  get level5(){
    return Math.round((this.SCORE[4]/this.SCORE.reduce((p,c)=>p+c,0))*100)+"%" ||"0%";
  }

  get level4(){
    return Math.round((this.SCORE[3]/this.SCORE.reduce((p,c)=>p+c,0))*100)+"%" ||"0%";
  }

  get level3(){
    return Math.round((this.SCORE[2]/this.SCORE.reduce((p,c)=>p+c,0))*100)+"%" ||"0%";
  }

  get level2(){
    return Math.round((this.SCORE[1]/this.SCORE.reduce((p,c)=>p+c,0))*100)+"%" ||"0%";
  }

  get level1(){
    return Math.round((this.SCORE[0]/this.SCORE.reduce((p,c)=>p+c,0))*100)+"%" ||"0%";
  }

}
