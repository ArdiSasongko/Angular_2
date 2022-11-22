import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {  FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm !: FormGroup
  constructor(private user : ItemService, private fb : FormBuilder) { }

  data : any[] =[];
  addData: any = (<FormArray>this.userForm.get('address')).controls

  ngOnInit(): void {
    this.data = this.user.user
    this.userForm = this.fb.group({
      id : new FormControl(null),
      name : new FormControl(null),
      age : new FormControl(null),
      email : new FormControl(null),
      gender : new FormControl(null),
      profession : new FormControl(null),
      martialStatus : new FormControl(null),
      address : new FormArray([])
    })
  }

  onSubmit(){
    this.user.onSubmit(this.userForm.value)
  }

  getAddress(){
    (<FormArray>this.userForm.get('address')).push(new FormGroup({
      country: new FormControl(null),
      city : new FormControl(null),
      zipcode : new FormControl(null)
    }))
  }
}
