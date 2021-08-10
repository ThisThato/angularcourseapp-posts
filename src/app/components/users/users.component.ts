import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstname: "",
    lastname: "",
    email: ""
  };

  users: User[];

  showExtended: boolean = true;
  loaded: boolean = true;

  //propery binding
  enableAdd: boolean = false;
  currentClasses: any = {};
  currentStyles = {};
  showUserForm: boolean = false;



  constructor() {
    this.users = [{
      firstname: "",
      lastname: "",
      email: ""
    }];

  }

  ngOnInit() {


    this.users = [
      {
        firstname: "John",
        lastname: "Doe",
        email: "john@gmail.com",
        isActive: true,
        registered: new Date('01/07/2021 11:45:00'),
        hide: true
      },
      {
        firstname: "Lethabo",
        lastname: "Maja",
        email: "lethabo@yahoo.com",
        isActive: false,
        registered: new Date('04/01/2019 09:00:00'),
        hide: true
      },
      {
        firstname: "Joy",
        lastname: "Mantjane",
        email: "joy@outlook.com",
        registered: new Date('02/02/2020 08:30:00'),
        hide: true
      },

    ]

    // this.addUser({
    //   firstname: "David",
    //   lastname: "Williams"
    // })

    this.setCurrentClasses()
    this.setCurrentStyles();

  }

  // addUser() {

  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   //adds to the begining of the array
  //   this.users.unshift(this.user)

  //   this.user = {
  //     firstname: "",
  //     lastname: "",
  //     email: ""
  //   }
  // }

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

  onSubmit(e: any) {
    e.preventDefault();
    console.log("...")
  }

}
