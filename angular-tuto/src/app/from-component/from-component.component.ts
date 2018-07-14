import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
//import {NgForm} from '@angular/forms';
declare var $ :any; 

@Component({
  selector: 'app-from-component',
  templateUrl: './from-component.component.html',
  styleUrls: ['./from-component.component.css']
})

@Injectable()

export class FromComponentComponent {

  constructor(private http: HttpClient) { }
  showLoginFrom = () => {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    //e.preventDefault();
    return false;

  }
  showRegisterFrom = () => {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    return false;
  }
  doLogin = (formValue) => {
    //console.log(formValue.value);
    this.http.post('http://localhost:3000/post_from_data', formValue.value)
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }
  doRegister = (formValue) => {
    //console.log(formValue.value);
    this.http.post('http://localhost:3000/post_from_data', formValue.value)
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }
}
