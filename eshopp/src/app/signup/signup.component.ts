import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators} from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =>
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl ('',Validators.required),
    email: new FormControl ('',[Validators.email,Validators.required]),
    password: new FormControl ('',Validators.required),
    confirmPassword: new FormControl ('',Validators.required)

  })

  constructor() {}

  ngOnInit(): void{

  }

}
