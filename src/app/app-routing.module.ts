import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyGoalComponent } from './components/money-goal/money-goal.component';

const routes: Routes = [
  {path: '', redirectTo: '/MoneyGoal', pathMatch: 'full'},
  {path: 'MoneyGoal', component: MoneyGoalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
