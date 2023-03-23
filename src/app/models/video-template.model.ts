import {BaseTemplateClass, BaseTemplateModel} from "./base-template.model";

export interface VideoTemplateModel extends BaseTemplateModel {
  title: string; // TODO Multilang support
  url: string;
}

export class VideoTemplateClass extends BaseTemplateClass implements VideoTemplateModel {
  title: string = "";
  url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  static DefaultEmptyVideoClass = () : VideoTemplateClass => new VideoTemplateClass("");

  static isClass = (obj: any): boolean => obj instanceof VideoTemplateClass;
}
