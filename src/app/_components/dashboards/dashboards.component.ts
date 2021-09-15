import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],
})
export class DashboardsComponent implements OnInit {
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







  public code3: string = `
  @Input() CARD_TITLE:string="CARD TITLE";
  @Input() CARD_DESCRIPTION:string="CARD DESCRIPTION";`;

  constructor() {}

  ngOnInit(): void {}
}
