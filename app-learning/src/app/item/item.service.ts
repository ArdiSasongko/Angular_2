import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  user=[
    {
      id : 1,
      name : "Budi",
      email : "budi123@gmail.com",
      gender : 'Male',
      age : 20,
      profession : "Tailor",
      martialStatus : "married",
      address :{
        country : 'Indonesia',
        city : 'Bandung',
        zipcode : '12345'
      }
    }
  ]

  onSubmit(item:any){
    this.user.push(item)
  }
}
