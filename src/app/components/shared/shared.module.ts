import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeHoverStyleDirective } from './directives/change-hover-styles/change-hover-style.directive';
import { ChangeFontSizeDirective } from './directives/change-font-size/change-font-size.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ChangeHoverStyleDirective, ChangeFontSizeDirective],
  providers: [],
  exports: [ChangeHoverStyleDirective, ChangeFontSizeDirective]
})
export class SharedModule {}
