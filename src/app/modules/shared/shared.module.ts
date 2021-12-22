import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filters/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterDatePipe } from './filters/filter-date.pipe';
import { FilterService } from './filters/filter/filter.service';

@NgModule({
  declarations: [FiltersComponent, FilterComponent, FilterDatePipe],
  imports: [CommonModule, FormsModule, NgbModule],
  providers: [FilterService],

  exports: [FiltersComponent, FilterComponent, FilterDatePipe],
})
export class SharedModule {}
