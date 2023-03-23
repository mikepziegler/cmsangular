import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {

  @Output() newElement = new EventEmitter<string>();

  clickElement(type: string) {
    this.newElement.emit(type)
  }

}
