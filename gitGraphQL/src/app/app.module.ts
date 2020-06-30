import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitCardViewComponent } from './git-card-view/git-card-view.component';
import { GitCardDetailViewComponent } from './git-card-detail-view/git-card-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GitCardViewComponent,
    GitCardDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
