import {Component, Input, OnInit} from '@angular/core';
import {TextTemplateModel} from "../../../models/text-template.model";



@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {

  @Input() text: TextTemplateModel = {
    type: 'text',
    text: 'Click here to write...' // TODO Multilang support
  };
}
