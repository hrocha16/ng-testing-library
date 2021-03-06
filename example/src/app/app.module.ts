import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FetchComponent } from './fetch/fetch.component';
import { FetchService } from './fetch/fetch.service';

@NgModule({
  declarations: [AppComponent, FetchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
