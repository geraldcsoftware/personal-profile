import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage, LayoutPage, ProfilePage } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomePage },
      { path: 'profile', component: ProfilePage },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
