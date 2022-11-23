import { Userinterface } from './user';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table-and-form';

  userList: Array<Userinterface> = [
    {
      name: 'Adam',
      lastname: 'Dickson',
      age: 15,
      email: 'somethningrandom@.google.com',
      favoriteColor: 'Green',
      favoriteProgrammingLanguage: 'C++',
      orderedNewsLetter:true
    },
    {
      name: 'Jason',
      lastname: 'Snowfall',
      age: 25,
      email: 'somethningrandom2222@.google.com',
      favoriteColor: 'Red',
      favoriteProgrammingLanguage: 'Javascript',
      orderedNewsLetter:false,
    },
  ];
  addItem(newUser: Userinterface) {
    this.userList.push(newUser);
  }
}
