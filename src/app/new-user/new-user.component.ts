import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
  this.userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    hobbies: this.formBuilder.array([])
  });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const user = new User(formValue.firstName, formValue.lastName, formValue.email, formValue.hobbies ? formValue.hobbies : []);
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }
  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
