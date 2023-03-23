import {BaseTemplateClass, BaseTemplateModel} from "./base-template.model";

export interface TextTemplateModel extends BaseTemplateModel {
  text: string; // TODO Multilang support
}

export class TextTemplateClass extends BaseTemplateClass implements TextTemplateModel {
  override readonly type: string = "text";

  text: string;

  constructor(text: string) {
    super();

    this.text = text
  }

  static DefaultEmptyTextClass= (): TextTemplateClass => new TextTemplateClass("")

  static isClass = (obj: any): boolean => obj instanceof TextTemplateClass;

}

export function getTextModelFromBaseComponent(component: BaseTemplateModel): TextTemplateModel {
  return component as TextTemplateModel
}


