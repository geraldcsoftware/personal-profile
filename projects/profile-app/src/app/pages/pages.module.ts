import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPage } from './layout/layout.page';
import { HomePage } from './home/home.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ProfilePage } from './profile/profile.page';



@NgModule({
  declarations: [LayoutPage, HomePage, ProfilePage],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
