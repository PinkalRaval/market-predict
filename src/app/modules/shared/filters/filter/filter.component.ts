import { Component, Input, OnInit } from '@angular/core';
import { CommonFilterConfig } from '../filters.component';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter!: CommonFilterConfig;
  filterArray: string[] = [
    'All',
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
  ];
  collapse = true;
  check = false;
  searchArray: string[] = [];
  selectedFilters: string[] = ['All'];
  constructor(private filterService: FilterService) {
    this.filterService.getExpanded().subscribe((filters) => {
      if (filters != this.filter.type) {
        this.collapse = true;
      }
    });
  }
  ngOnInit(): void {
    this.searchArray = JSON.parse(JSON.stringify(this.filterArray));
  }

  show() {
    this.collapse = !this.collapse;
    this.filterService.setExapaded(this.filter.type);
    this.searchArray = JSON.parse(JSON.stringify(this.filterArray));
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
  onSearch(searchValue: any) {
    this.searchArray = this.filterArray.filter((s) =>
      s.toLocaleLowerCase().includes(searchValue.target.value)
    );
  }
}
