import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TechListItemComponent } from './tech-list-item/tech-list-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuItemComponent,
    TechListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuItemComponent,
    TechListItemComponent
  ],
})
export class ComponentsModule { }
