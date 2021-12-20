import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { FilterComponent } from './filters/filter/filter.component';

@NgModule({
  declarations: [FiltersComponent, FilterComponent],
  imports: [CommonModule],
  exports: [FiltersComponent, FilterComponent],
})
export class SharedModule {}
