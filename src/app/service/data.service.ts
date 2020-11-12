import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  firstName;
  lastName;
  phoneNum;
  password;

  constructor() { }
}
