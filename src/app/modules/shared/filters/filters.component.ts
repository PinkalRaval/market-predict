import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  fromDates = false;
  toDates = false;
  fromDate: NgbDateStruct = { year: 2021, month: 12, day: 11 };
  toDate: NgbDateStruct = { year: 2022, month: 12, day: 11 };

  date: { year: number; month: number } = { year: 2050, month: 12 };
  constructor(private calendar: NgbCalendar) {}
  // selectToday() {
  //   this.fromDate = this.calendar.getToday();
  //   this.show = !this.show;
  // }
  ngOnInit(): void {}

  onFromDate() {
    this.fromDates = !this.fromDates;
  }
  onToDate() {
    this.toDates = !this.toDates;
  }
}
