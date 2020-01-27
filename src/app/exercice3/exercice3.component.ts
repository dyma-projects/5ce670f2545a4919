import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
status:boolean;	
  constructor() { 
  	this.status=true;


  }
	hideAndShowParagraphe(event):void{
		if(this.status){
			this.status=false;	
		}
		else{
			this.status=true;	
		}
		console.log(this.status)
	}
  ngOnInit() {
  }

}
