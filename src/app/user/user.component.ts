import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  first = "" 
  last = "" 
  phone=""
  pwd= ""

  userForm = this.fb.group({
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    pwd: ['', [Validators.required]],

  });

  constructor(private router: Router,
    private dataService: DataService,
    private fb: FormBuilder) { }

    firstChange(event) {
      //alert("firstName Change")
      this.first = event.target.value 
      this.dataService.firstName=this.first
      // alert(this.dataService.firstName);
    }

    lastChange(event) {
      //alert("firstName Change")
      this.last = event.target.value 
      this.dataService.lastName=this.last
      // alert(this.dataService.lastName);
    }

    phoneChange(event) {
      //alert("firstName Change")
      this.phone = event.target.value 
      this.dataService.phoneNum=this.phone
      // alert(this.dataService.phoneNum);
    }

    passChange(event) {
      //alert("firstName Change")
      this.pwd = event.target.value 
      this.dataService.password=this.pwd
      // alert(this.dataService.password);
    }

  ngOnInit(): void {
  }

  getError(field) {
    return (this.userForm.get(field).touched || this.userForm.get(field).dirty) && this.userForm.get(field).errors;
  }

  formCreate() {
  if (this.userForm.valid) {
  alert("User form created successfully")
  this.router.navigateByUrl("form");
    }
  else
    {
      alert("form is invalid")
    }
  }
}
