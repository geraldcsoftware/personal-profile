import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.page.html',
  host: { class: 'flex-grow' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage {
}
