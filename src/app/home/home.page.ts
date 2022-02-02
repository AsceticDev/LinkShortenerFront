import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {
    const myDate = new Date();
    let object = myDate;

    do {
      object = Object.getPrototypeOf(object);
      console.log(object);
    } while (object);

  }


}
