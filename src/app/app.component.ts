import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { CartListComponent } from './components/cart/components/cart-list/cart-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'shop';

  @ViewChild('appTitle') appTitle: ElementRef;
  @ViewChild('appCartList') childComp: ElementRef<CartListComponent>;

  ngAfterViewInit () {
    this.appTitle.nativeElement.innerHTML = 'App Title!!!!';
    console.log(this.childComp);
  }
}
