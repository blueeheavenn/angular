import { Component, OnInit, ElementRef } from '@angular/core';
import { NgModel, Form }  from '@angular/forms'
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user:User={
  name:null,
  pwd:null

  }

  constructor() { }

  ngOnInit() {
    
  }

  btinClick(event:any):void{
    console.log('ELEMETN  '+event);
  
  
  }
//  user:Object={name:"",
//  pwd:"password"
// }
  submit(user:User):void{
    console.log('submitting '+user.name +   "  ")

  }

}

 export class User{
 public name:String;
 public pwd:String;



 }
