import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private dataService: DataService) { }
  

fname=this.dataService.firstName;
lname=this.dataService.lastName;

name =stringify(this.fname + this.lname)
ph=this.dataService.phoneNum;


  ngOnInit(): void {
    
  }

}
