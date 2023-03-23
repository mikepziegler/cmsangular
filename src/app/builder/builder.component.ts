import { Component } from '@angular/core';
import {ImageTemplateClass} from "../models/image-template.model";
import {ContentType} from "../models/contenttype.model";
import {getTextModelFromBaseComponent, TextTemplateClass, TextTemplateModel} from "../models/text-template.model";
import {VideoTemplateClass} from "../models/video-template.model";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {
  components: ContentType[] = [];

  ngOnInit() {
    this.components.push({
      type: "placeholder"
    })
  }

  addElement(index: number) {
    this.components.splice(index, 0, {
      type: "placeholder"
    })
  }

  setElementType(type: string, index: number) {

    const component =
      type === "text" ? TextTemplateClass.DefaultEmptyTextClass() :
        type === "image" ? ImageTemplateClass.DefaultEmptyImageClass() :
          VideoTemplateClass.DefaultEmptyVideoClass();

    this.components.splice(index, 1, component)
  }


  getModel(model: ContentType) {
    return model
  }

  getTextModel(component: ContentType): TextTemplateModel {
    return getTextModelFromBaseComponent(component)
  }
}
