import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
firstVariable:string;
monPrenom:string;
  constructor() {
	  this.firstVariable = 'ma première variable angular';
	  this.monPrenom = 'Geoffrey';
   }
	
  consoleAlert(event): void {
      console.log('input value change');
    }
  consoleAlertClick(event): void {
      console.log('click');
    }
  ngOnInit() {
  }

}
