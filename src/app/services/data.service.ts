import { Injectable } from '@angular/core';
import { User } from "../models/User"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[]

  constructor() {

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

  }

  getUsers(): User[] {
    return this.users;
  }
}
