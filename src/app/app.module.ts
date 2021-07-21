import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
