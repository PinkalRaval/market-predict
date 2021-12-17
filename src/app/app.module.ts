import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BaseComponent } from './layout/base/base.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { AttributionDataComponent } from './Modules/attribution-data/attribution-data.component';
import { StateOfSpendingComponent } from './Modules/state-of-spending/state-of-spending.component';
import { OptimizationComponent } from './Modules/optimization/optimization.component';
import { CreativeDashboardComponent } from './Modules/creative-dashboard/creative-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    DashboardComponent,
    AttributionDataComponent,
    StateOfSpendingComponent,
    OptimizationComponent,
    CreativeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
