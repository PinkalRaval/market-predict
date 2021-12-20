import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StateOfSpendingComponent } from './state-of-spending.component';
import { StateOfSpendingRoutingModule } from './state-of-spending.routing.module';

@NgModule({
  declarations: [StateOfSpendingComponent],
  imports: [StateOfSpendingRoutingModule, SharedModule],
})
export class StateOfSpendingModule {}
