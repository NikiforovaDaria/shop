import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeHoverStyleDirective } from './directives/change-hover-styles/change-hover-style.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ChangeHoverStyleDirective],
  providers: [],
  exports: [ChangeHoverStyleDirective]
})
export class SharedModule {}
