import { TabConfig } from './tabs/components/tab/tab-config';
import { ITab } from './tabs/components/tab/tab.model';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table-2/table-2.component';
import { TabComponent } from './tabs/components/tab/tab.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tabConfig1: TabConfig = new TabConfig(1, 'Table 1', TableComponent);
  tabConfig2: TabConfig = new TabConfig(2, 'Table 2', Table2Component);
  table1 = TableComponent;
  table2 = Table2Component;
}
