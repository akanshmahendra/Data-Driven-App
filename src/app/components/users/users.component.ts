import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  showExtended : boolean = true;
  loaded : boolean = false;
  enableAdd : boolean = true;

  constructor() { }

  ngOnInit()
  {
    this.users = [
      {
        firstName : 'Akansh',
        lastName : 'Mahendra',
        age : 26,
        address : {
          street : 'D-1004, Ittina Akkala Whitefield Road',
          city : 'Bangalore',
          state : 'Karnataka'
        },
        isActive : true,
        registered : new Date('01/03/1993 08:30:00')
      },
      {
        firstName : 'Aditya',
        lastName : 'Joshi',
        age : 25,
        address : {
          street : 'D-1004, Ittina Akkala Whitefield Road',
          city : 'Bangalore',
          state : 'Karnataka'
        },
        isActive : false,
        registered : new Date('02/21/1999 16:14:00')
      },
      {
        firstName : 'Sumeet',
        lastName : 'Mandal',
        age : 27,
        address : {
          street : 'D-1004, Ittina Akkala Whitefield Road',
          city : 'Bangalore',
          state : 'Karnataka'
        },
        isActive : false,
        registered : new Date('09/11/2007 11:45:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user : User)
  {
    this.users.push(user);
  }

}
