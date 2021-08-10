import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { DataService } from "../../services/data.service";

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
  data: any;
  showExtended: boolean = true;
  loaded: boolean = true;


  //propery binding
  enableAdd: boolean = false;
  currentClasses: any = {};
  currentStyles = {};
  showUserForm: boolean = false;

  //form submit
  @ViewChild("userForm") form: any;




  constructor(private dataService: DataService) {
    this.users = [{
      firstname: "",
      lastname: "",
      email: ""
    }];

    this.users = dataService.getUsers();

  }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      console.log(data)
    })

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

  onSubmit({ value, valid }: NgForm) {
    if (!valid) {
      console.log("Form is not valid")
    } else {
      //add user
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);

      this.form.reset();
    }
  }

}
