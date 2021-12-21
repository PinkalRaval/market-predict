import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterArray: string[] = ['All', 'test1', 'test2', 'test3', 'test4'];
  collapse = false;
  check = false;
  selectedFilters: string[] = ['All'];
  constructor() {}
  ngOnInit(): void {}
  show() {
    this.collapse = !this.collapse;
  }
  onSelect(select: string) {
    if (this.selectedFilters.indexOf(select) != -1) {
      const i = this.selectedFilters.indexOf(select);
      this.selectedFilters.splice(i, 1);
      if (this.selectedFilters.length === 0) {
        this.selectedFilters.push('All');
      }
    } else {
      if (select === 'All') {
        this.selectedFilters = ['All'];
      } else {
        if (this.selectedFilters.indexOf('All') != -1) {
          const i = this.selectedFilters.indexOf('All');
          this.selectedFilters.splice(i, 1);
        }
        this.selectedFilters.push(select);
      }
    }
  }
  onRemove(select: string) {
    this.onSelect(select);
  }
}
