import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filters/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterDatePipe } from './filters/filter-date.pipe';

@NgModule({
  declarations: [FiltersComponent, FilterComponent, FilterDatePipe],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [FiltersComponent, FilterComponent, FilterDatePipe],
})
export class SharedModule {}
