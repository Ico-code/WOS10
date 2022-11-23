import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Userinterface } from '../../user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  @Output() newUser = new EventEmitter<Userinterface>();

  addNewUser(userForm:FormGroup) {
    this.newUser.emit(userForm.value);
  }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: '',
      lastname: '',
      email: '',
      age: 0,
      favoriteColor: '',
      favoriteProgrammingLanguage: '',
      orderedNewsLetter:false,
    });
  }

  ngOnInit(): void {}
}
