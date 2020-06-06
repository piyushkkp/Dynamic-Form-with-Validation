import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
      this.createRegisterForm();
  }

  ngOnInit() {}

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      userName: [''],
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.registerForm.value );
}

}
