import { TableService } from './table/table.service';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table-2/table-2.component';
import { TabsModule } from './tabs/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Table2Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule
  ],
  providers: [ TableService],
  entryComponents: [Table2Component, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
