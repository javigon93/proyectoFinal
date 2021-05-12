import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rememberMeIsChecked: boolean = false;
  isAuthError: boolean = false;
  isError:boolean=false;
  user: any = {
    username: "",
    password: "",
    entity: "554271db75f421e54400000c",
  };
  constructor() { }

  ngOnInit(): void {
  }

  login(){}

  checkHandler(){

  }
}
