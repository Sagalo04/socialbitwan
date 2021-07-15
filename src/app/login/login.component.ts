import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private http: HttpClient, private Router:Router) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  flogin() {
    const code = 111518
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    };
    let body = new URLSearchParams();
    body.set('email', this.email.value);
    body.set('password', this.password.value);
    body.set('applicantcode', `${111518}`);
    console.log(body.toString())
    this.http.post<any>('/public/login', body.toString(), { headers: headers }).subscribe(data => {
      console.log(data.code)
      if(data.code == 200){
        this.Router.navigateByUrl('/home');
      }
    })

}
}
