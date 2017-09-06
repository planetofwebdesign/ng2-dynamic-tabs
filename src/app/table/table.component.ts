import {
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { TableService } from './table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() loadData = false;
  records: any[] = [];

  constructor(
    private tableService: TableService,
    ) {
      this.tableService.getData().subscribe(data => {
           this.records = data;
         });
    }

  ngOnInit() {
        debugger;
  }
  ngOnDestroy() {
    debugger;
  }
}
