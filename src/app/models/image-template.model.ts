import {BaseTemplateClass, BaseTemplateModel} from "./base-template.model";

export interface ImageTemplateModel extends BaseTemplateModel {

  url: string;
  title: string;
  alt: string;
  description: string; // TODO Multilang support
}

export class ImageTemplateClass extends BaseTemplateClass implements ImageTemplateModel {
  override readonly type: string = "image";

  alt = "";
  description = "";
  title = "";
  url = "";

  constructor(url: string) {
    super();

    this.url = url;
  }

  static DefaultEmptyImageClass = () : ImageTemplateClass => new ImageTemplateClass("");

  static isClass = (obj: any): boolean => obj instanceof ImageTemplateClass;
}

