import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { TechListItemComponent } from './tech-list-item/tech-list-item.component';
import { RouterModule } from '@angular/router';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuItemComponent,
    TechListItemComponent,
    ThemeSwitchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuItemComponent,
    TechListItemComponent,
    ThemeSwitchComponent
  ],
})
export class ComponentsModule { }
