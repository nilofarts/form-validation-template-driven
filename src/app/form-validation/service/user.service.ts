
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {
   createUser(user: User) {
     console.log('Email: ' + user.email);
    
   }
} 