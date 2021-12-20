import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreativeDashboardComponent } from './creative-dashboard.component';

const routes: Routes = [{ path: '', component: CreativeDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreativeDashboardRoutingModule {}
