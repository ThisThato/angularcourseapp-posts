import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../models/User"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[]
  data: Observable<any>

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

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000)

      setTimeout(() => {
        observer.next(2);
      }, 2000)
      setTimeout(() => {
        observer.next(3);
      }, 3000)
      setTimeout(() => {
        observer.next(4);
      }, 4000)
    })

    return this.data;
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user)
  }
}
