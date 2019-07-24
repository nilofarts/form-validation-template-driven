import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { UserService } from './service/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{8,15}$";
  passPattern = "^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"; //for email
  decimalPattern= "/^\d{0,2}\.?\d{0,2}$/g"; //for decimal

  constructor(private userService: UserService) {
  }
  ngOnInit() {
  }

 register(form: NgForm){

   console.log("form submitted");

 }


}
