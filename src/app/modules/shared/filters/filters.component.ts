import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filterConfig: CommonFilterConfig[] = [];

  fromDates = false;
  toDates = false;
  fromDate: NgbDateStruct = { year: 2021, month: 12, day: 11 };
  toDate: NgbDateStruct = { year: 2022, month: 12, day: 11 };
  date: { year: number; month: number } = { year: 2050, month: 12 };

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {}

  onFromDate() {
    this.fromDates = !this.fromDates;
  }
  onToDate() {
    this.toDates = !this.toDates;
  }
}
export interface CommonFilterConfig {
  name: string; //use name for label
  type: string; //use type for comparison
  api: string; //use api for api call
  singleSelect?: boolean; //use singleSelect for singleSelect
}
