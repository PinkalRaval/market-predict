import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributionDataComponent } from './attribution-data.component';

const routes: Routes = [{ path: '', component: AttributionDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttributionDataRoutingModule {}
