import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-com',
  templateUrl: './workshop-com.component.html',
  styleUrls: ['./workshop-com.component.scss']
})
export class WorkshopComComponent implements OnInit {

  public code_create_component=
`
  ng generate component <component-name>`;

  public code_call_component=
`
  <selector-name></selector-name>`;

  code_workshop_1=
`
  ng g c _components/dashboards
  ng g c _components/cards/card1
  ng g c _components/cards/card2
  ng g c _components/cards/card3
  ng g c _components/cards/card4
  

  `;

  code_workshop_2=
`
  ng g c _components/cards/cardCustom`;
  

  public code1: string = `
  <div class="container px-4 p-3">
    <div class="row g-4">
      <div class="col">
        <app-card1></app-card1>
      </div>
        <div class="col">
          <app-card2></app-card2>
        </div>
      <div class="col">
          <app-card3></app-card3>
      </div>
      <div class="col">
        <app-card4></app-card4>
      </div>
    </div>
  </div>`;


  public code2: string = `
  <div class="container px-4 p-3">
    <div class="row g-4">
      <div class="col">
        <app-card-custom
          [CARD_TITLE]="'TITLE 1'"
          [CARD_DESCRIPTION]="'DESCRIPTION 1'"
        ></app-card-custom>
      </div>
      <div class="col">
        <app-card-custom
          [CARD_TITLE]="'TITLE 2'"
          [CARD_DESCRIPTION]="'DESCRIPTION 2'"
        ></app-card-custom>
      </div>
      <div class="col">
        <app-card-custom
          [CARD_TITLE]="'TITLE 3'"
          [CARD_DESCRIPTION]="'DESCRIPTION 3'"
        ></app-card-custom>
      </div>
      <div class="col">
        <app-card-custom
          [CARD_TITLE]="'TITLE 4'"
          [CARD_DESCRIPTION]="'DESCRIPTION 4'"
        ></app-card-custom>
      </div>
    </div>
  </div>`;


  public code3: string = 
`
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title 1</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`;

  public code4: string = `
  @Input() CARD_TITLE:string="CARD TITLE";
  @Input() CARD_DESCRIPTION:string="CARD DESCRIPTION";`;

  public code5: string = 
  `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{CARD_TITLE}}</h5>
        <p class="card-text">{{CARD_DESCRIPTION}}</p>
      </div>
    </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
