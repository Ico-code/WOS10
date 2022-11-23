import { Component, OnInit, Input } from '@angular/core';
import { Userinterface } from '../../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() userlist: Array<Userinterface> = [
    {
      name: '',
      lastname: '',
      age: 0,
      email:'',
      favoriteColor: '',
      favoriteProgrammingLanguage: '',
      orderedNewsLetter: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
