import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StateOfSpendingComponent } from "./state-of-spending.component";

const routes:Routes=[{
  path:'',component:StateOfSpendingComponent
}]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class StateOfSpendingRoutingModule {}
