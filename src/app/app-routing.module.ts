import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'stateofspending',
        loadChildren: () =>
          import('./modules/state-of-spending/state-of-spending.module').then(
            (m) => m.StateOfSpendingModule
          ),
      },
      {
        path: 'attiributiondata',
        loadChildren: () =>
          import('./modules/attribution-data/attribution-data.module').then(
            (m) => m.AttributionDataModule
          ),
      },
      {
        path: 'optimization',
        loadChildren: () =>
          import('./modules/optimization/optimization.module').then(
            (m) => m.OptimizationModule
          ),
      },
      {
        path: 'creativedashboard',
        loadChildren: () =>
          import('./modules/creative-dashboard/creative-dashboard.module').then(
            (m) => m.CreativeDashboard
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
