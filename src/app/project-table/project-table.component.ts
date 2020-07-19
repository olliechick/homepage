import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  displayedColumns: string[] = ['description', 'language', 'github'];
  @Input() dataSource: any[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
