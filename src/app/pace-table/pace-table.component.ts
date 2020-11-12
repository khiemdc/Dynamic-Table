import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-pace-table',
  templateUrl: './pace-table.component.html',
  styleUrls: ['./pace-table.component.css']
})
export class PaceTableComponent implements OnInit {
  tableData: any;

  colors = [
    { status: 'Passed', color: 'red' },
    { status: 'Approuved', color: 'blue' },
    { status: 'Warning', color: 'green' },
     { status: 'Ignored', color: 'yellow' }
  ]

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.tableService.getTableData().subscribe(res => {
      this.tableData = res;
      console.log(this.tableData);
    });
  }

  getTheColor(status) {
    return this.colors.filter(item => item.status === status)[0].color;

  }
  removeTerm(term) {}
}
