import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gcs-menu-item',
  templateUrl: './menu-item.component.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() route: string | string[] | undefined;
  @Input() text: string | undefined;
}
