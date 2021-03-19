import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gcs-tech-list-item',
  templateUrl: './tech-list-item.component.html',
  styles: [
  ]
})
export class TechListItemComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
}
