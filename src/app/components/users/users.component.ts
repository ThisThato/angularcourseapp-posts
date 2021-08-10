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
  currentStyles = {};



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
        age: 70,
        address: {
          street: "20 Main street",
          city: "Johannesburg",
          province: "Gauteng"
        },
        isActive: true,
        registered: new Date('01/07/2021 11:45:00'),
        hide: true
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
        isActive: false,
        registered: new Date('04/01/2019 09:00:00'),
        hide: true
      },
      {
        firstname: "Joy",
        lastname: "Mantjane",
        age: 50,
        address: {
          street: "20 Thabo Mbeki street",
          city: "Polokwane",
          province: "Limpopo"
        },
        registered: new Date('02/02/2020 08:30:00'),
        hide: true
      },

    ]

    this.addUser({
      firstname: "David",
      lastname: "Williams"
    })

    this.setCurrentClasses()
    this.setCurrentStyles();

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

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '50px',
      'font-size': this.showExtended ? '' : '25px'
    }
  }


  toggleHide(user: User) {
    user.hide = !user.hide;
  }

}
