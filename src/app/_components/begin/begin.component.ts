import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent implements OnInit {


  public code_install_angular:string = 
`
  npm install -g @angular/cli`;

  public code_new_project_angular:string = 
  `
    ng new my-app`;

  public code_run_application:string = 
  `
    cd my-app
    ng serve --open`;

  constructor() { }

  ngOnInit(): void {
  }

}
