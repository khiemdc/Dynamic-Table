import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaceTableComponent } from './pace-table/pace-table.component';
import { TableService } from './services/table.service';

@NgModule({
  declarations: [
    AppComponent,
    PaceTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
