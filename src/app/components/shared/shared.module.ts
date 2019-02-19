import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangeHoverStyleDirective } from './directives/change-hover-styles/change-hover-style.directive';
import { ChangeFontSizeDirective } from './directives/change-font-size/change-font-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ChangeHoverStyleDirective, ChangeFontSizeDirective, OrderByPipe],
  providers: [],
  exports: [FormsModule, ChangeHoverStyleDirective, ChangeFontSizeDirective, OrderByPipe]
})
export class SharedModule {}
