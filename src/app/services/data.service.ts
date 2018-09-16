import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  users : User[];
  constructor()
  {
    this.users = [
      {
        firstName : 'Akansh',
        lastName : 'Mahendra',
        email : 'akanshmahendra@gmail.com',
        isActive : true,
        registered : new Date('01/03/1993 08:30:00'),
        hide : true
      },
      {
        firstName : 'Aditya',
        lastName : 'Joshi',
        email : 'adityajoshi@gmail.com',
        isActive : false,
        registered : new Date('02/21/1999 16:14:00'),
        hide : true
      },
      {
        firstName : 'Sumeet',
        lastName : 'Mandal',
        email : 'sumeetmandal@gmail.com',
        isActive : false,
        registered : new Date('09/11/2007 11:45:00'),
        hide : true
      }
    ];
  }

  getUsers(): User[]
  {
    return this.users;
  }

  addUser(user : User)
  {
    this.users.unshift(user);
  }
}
