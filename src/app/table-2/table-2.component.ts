import { TableService } from '../table/table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-2',
  templateUrl: './table-2.component.html',
  styleUrls: ['./table-2.component.css']
})
export class Table2Component implements OnInit {

  records: any[] =  [];

  constructor(
    private tableService: TableService,
    ) {
       this.tableService.getData2().subscribe(data => {
           this.records = data;
         });
    }

  ngOnInit() {
  }
}
