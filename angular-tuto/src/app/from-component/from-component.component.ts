import { Component, OnInit , Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {Router} from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
//import {NgForm} from '@angular/forms';
declare var $ :any; 

@Component({
  selector: 'app-from-component',
  templateUrl: './from-component.component.html',
  styleUrls: ['./from-component.component.css']
})

@Injectable()

export class FromComponentComponent {
  @Input() username: any;
  @Input() password: any;
  
  constructor(private http: HttpClient , private router: Router , private cookieService: CookieService) { }
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
    /*this.http.post('http://192.168.239.134:3000/post_from_data', formValue.value)
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )*/
      this.username = 'admin';
      this.password  = 'admin';
      if(formValue.value.email === this.username && formValue.value.email === this.password)
      {
        alert('matched');
        this.cookieService.set("isLoggedIn", "true");
        this.router.navigate(['dashbord']);
      }
      else{
        alert('not matched');
      }
  }
  doRegister = (formValue) => {
    //console.log(formValue.value);
    this.http.post('http://192.168.239.134:3000/post_from_data', formValue.value)
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }
}
