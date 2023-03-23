import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PlaceholderComponent} from "./components/placeholder/placeholder.component";
import {TemplateEditorComponent} from "./components/template-editor/template-editor.component";
import {ImageComponent} from "./components/templates/image/image.component";
import {TextComponent} from "./components/templates/text/text.component";
import {VideoComponent} from "./components/templates/video/video.component";

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    PlaceholderComponent,
    TemplateEditorComponent,
    ImageComponent,
    TextComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
