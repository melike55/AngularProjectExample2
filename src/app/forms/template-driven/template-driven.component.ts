import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent implements OnInit{

  loginModel:loginModel;//tip güvenli hale getirmek için aşağıda interface kullandık
 //loginModel2:loginModelC;
  countryMenu:countryDropMenu[]=[{text:"Seçiniz",value:0},{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}];
  genderMenu:genderRadioMenu[]=[{text:"Erkek",value:1},{text:"Kadın",value:2}];

  constructor(){
    this.loginModel={userName:"" , password:"" ,rememberMe:false ,country:0 ,gender:1};
    //this.loginModel2=new loginModelC();//? ile nullable değer verdiğimiz için aşağıdaki sınıfta,değer atamaya gerek yoktur
  }

  ngOnInit(): void {
    
  }

  save(form:NgForm){
    console.log(form.value);
    //console.log(this.loginModel);
  }

  countryChange(value:any){
    console.log(value);
  }

  genderChange(value:any){
    console.log(value);
  }

  onChange(value:any){
    console.log(value);
  }

}

interface genderRadioMenu{
  text:string,
  value:number
}

interface countryDropMenu{
  text:string,
  value:number
}

interface loginModel{
  userName:string,
  password:string,
  rememberMe:boolean,
  country:number,
  gender:number
}

class loginModelC{
  userName?:string;
  password?:string;
  rememberMe?:boolean;

  
  //constructor( userName:string,password:string,rememberMe:boolean){
    //this.userName=userName;
    //this.password=password;
    //this.rememberMe=rememberMe;
  //}

  
}
