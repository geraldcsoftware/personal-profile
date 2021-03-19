import { Component } from '@angular/core';

@Component({
  selector: 'gcs-root',
  template: `
   <div class="flex flex-col w-full h-full overflow-x-hidden">
      <router-outlet></router-outlet>
  </div>   
  `
})
export class AppComponent { }
