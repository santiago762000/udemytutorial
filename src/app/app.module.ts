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
import { SearchComponent } from './home/search/search.component';
import { FavoriteComponent } from './home/favorite/favorite.component';
import { CommonDialogComponent } from './dialogs/common-dialog/common-dialog.component';
import { ConfirmActionDirective } from './directives/confirm-action.directive';

import {ConfigurationService} from './services/configuration.service';

import {AccessGuardService} from './services/access-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrderByPipe,
    SearchComponent,
    FavoriteComponent,
    CommonDialogComponent,
    ConfirmActionDirective
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
  entryComponents:[CommonDialogComponent],
  providers: [AccessGuardService,ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
