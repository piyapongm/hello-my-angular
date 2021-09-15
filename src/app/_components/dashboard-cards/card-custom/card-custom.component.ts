import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-custom',
  templateUrl: './card-custom.component.html',
  styleUrls: ['./card-custom.component.scss']
})
export class CardCustomComponent implements OnInit {

  @Input() CARD_TITLE:string="CARD TITLE";
  @Input() CARD_DESCRIPTION:string="CARD DESCRIPTION";

  // private _name='';
  // @Input() 
  //   get name(): string { return this._name; }
  //   set name(name: string) {
  //     this._name = (name && name.trim()) || '<no name set>';
  //   }

  constructor() { }

  ngOnInit(): void {}

}
