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
  table1 = TableComponent;
  table2 = Table2Component;
}
