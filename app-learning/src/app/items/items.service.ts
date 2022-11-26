import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cart:any[]=[];
  data:any[]=[
    {
      id:1,
      name:"Begel",
      price:15000,
      img:"https://p4.wallpaperbetter.com/wallpaper/74/94/503/food-bagel-bread-wallpaper-preview.jpg",
      desc:"Roti khas dari Eropa Timur (Polandia), bentuknya bulat seperti donat, tapi bagian dalam lebih padat. Bagel di sajikan pada saat makan pagi, dibelah, dibakar dan diolesi keju krim. Pada adonan bagel biasanya ditambahkan kismis, blueberry, bawang, biji-bijan atau bumbu daun."
    },
    {
      id:2,
      name:"Bialy",
      price:12000,
      img:"https://www.superindo.co.id/upload/images/ROTI%20BIALYS_divyascookbook_com.jpg",
      desc:"Roti juga berasal dari Eropa Timur (khususnya Polandia)  berbeda dengan bagel, bentuknya bulat namun memiliki lubang / kawah di bagian atasnya biasanya diisi dengan irisan bawang bombay."
    },
    {
      id:3,
      name:"Italian Breadstick",
      price:17000,
      img:"https://www.superindo.co.id/upload/images/ROTI%20GRISSINI_blog_foods_com.jpg",
      desc:"Roti renyah ini banyak di sajikan di restoran Italia sebagai snack pembuka, sehingga tamu yang datang menunggu makanan tidak bosan tapi juga tidak kekenyangan. Roti ini selain di sajikan polos, juga diberi aneka rasa seperti wijen, bawang, atau rempah dedaunan."
    },
    {
      id:4,
      name:"Begel",
      price:15000,
      img:"https://p4.wallpaperbetter.com/wallpaper/74/94/503/food-bagel-bread-wallpaper-preview.jpg",
      desc:"Roti khas dari Eropa Timur (Polandia), bentuknya bulat seperti donat, tapi bagian dalam lebih padat. Bagel di sajikan pada saat makan pagi, dibelah, dibakar dan diolesi keju krim. Pada adonan bagel biasanya ditambahkan kismis, blueberry, bawang, biji-bijan atau bumbu daun."
    },
    {
      id:5,
      name:"Bialy",
      price:12000,
      img:"https://www.superindo.co.id/upload/images/ROTI%20BIALYS_divyascookbook_com.jpg",
      desc:"Roti juga berasal dari Eropa Timur (khususnya Polandia)  berbeda dengan bagel, bentuknya bulat namun memiliki lubang / kawah di bagian atasnya biasanya diisi dengan irisan bawang bombay."
    },
    {
      id:6,
      name:"Italian Breadstick",
      price:17000,
      img:"https://www.superindo.co.id/upload/images/ROTI%20GRISSINI_blog_foods_com.jpg",
      desc:"Roti renyah ini banyak di sajikan di restoran Italia sebagai snack pembuka, sehingga tamu yang datang menunggu makanan tidak bosan tapi juga tidak kekenyangan. Roti ini selain di sajikan polos, juga diberi aneka rasa seperti wijen, bawang, atau rempah dedaunan."
    },
  ]

  constructor() { }

  oncart(data:any){
    let carts = this.cart.find(
      item => item.data.id == data.id
    );
    if(carts)
      return;

    this.cart.push(carts)
  }
}
