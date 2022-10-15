import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private router:Router) { 
    this.loginForm=formbuilder.group({
      email:[''],
      pass:[''],
      
    })
  }

  signin(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>
    {
      const users=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.pass===this.loginForm.value.pass
      })
      if(users){
        alert("User Exists")
      this.loginForm.reset
      }
    })
   }

  ngOnInit(): void {
  }

}
