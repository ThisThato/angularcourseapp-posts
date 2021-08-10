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
  //propery binding
  enableAdd: boolean = true;
  currentClasses: any = {};

  constructor() {
    this.users = [{
      firstname: "",
      lastname: "",
      age: 0,
      address: {
        street: "",
        city: "",
        province: ""
      },
      image: "http://lorempixel.com/600/600/people/1"
    }];
  }

  ngOnInit() {

    this.users = [
      {
        firstname: "John",
        lastname: "Doe",
        age: 70,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          province: "Gauteng"
        },
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true
      },
      {
        firstname: "Lethabo",
        lastname: "Maja",
        age: 20,
        address: {
          street: "20 Bombay street",
          city: "Polokwane",
          province: "Limpopo"
        },
        image: "http://lorempixel.com/600/600/people/1",
        isActive: false
      },
      {
        firstname: "Chris",
        lastname: "Mantjane",
        age: 50,
        address: {
          street: "20 Thabo Mbeki street",
          city: "Polokwane",
          province: "Limpopo"
        },
        image: "http://lorempixel.com/600/600/people/8"
      },

    ]

    this.addUser({
      firstname: "David",
      lastname: "Williams"
    })

    this.setCurrentClasses()


  }

  addUser(user: User) {
    this.users.push(user)
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended
    }
  }

}
