import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;

  constructor() {
    this.users = [{
      firstname: "",
      lastname: "",
      age: 0,
      address: {
        street: "",
        city: "",
        province: ""
      }
    }];
  }

  ngOnInit() {

    this.users = [
      {
        firstname: "John",
        lastname: "Doe",
        age: 30,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          province: "Gauteng"
        }
      },
      {
        firstname: "Lethabo",
        lastname: "Maja",
        age: 20,
        address: {
          street: "20 Bombay street",
          city: "Polokwane",
          province: "Limpopo"
        }
      },
      {
        firstname: "Chris",
        lastname: "Mantjane",
        age: 50,
        address: {
          street: "20 Thabo Mbeki street",
          city: "Polokwane",
          province: "Limpopo"
        }
      },

    ]

    this.addUser({
      firstname: "David",
      lastname: "Williams"
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
