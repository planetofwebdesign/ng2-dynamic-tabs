import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ TabComponent, TabsComponent],
  exports: [
    TabComponent,
    TabsComponent
  ]
})
export class TabsModule { }
