export interface BaseTemplateModel {
  type: string;
  html?: string;
  css?: string;
  js?: string;
}

export class BaseTemplateClass implements BaseTemplateModel {
  type = "";
  html = "";
  css = "";
  js = "";
}
