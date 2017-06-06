import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdDialogModule,MdSnackBarModule,MdSelectModule, MdListModule, MdTabsModule, MdInputModule,MdCardModule,MdButtonModule,MdIconModule,MdToolbarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FavoriteTabComponent } from './home/favorite-tab/favorite-tab.component';
import { SearchTabComponent } from './home/search-tab/search-tab.component';
import { CommonComponent } from './dialogs/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrderByPipe,
    FavoriteTabComponent,
    SearchTabComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule, 
    MdListModule, 
    MdTabsModule,
    MdSnackBarModule,
    MdDialogModule,
    routing
  ],
  providers: [],
  entryComponents: [
    CommonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
