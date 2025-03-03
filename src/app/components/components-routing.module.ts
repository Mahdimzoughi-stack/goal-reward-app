import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goal/goals/goals.component';
import { GoalFormComponent } from './goal/goal-form/goal-form.component';
import { RewardsComponent } from './reward/rewards/rewards.component';
import { RewardFormComponent } from './reward/reward-form/reward-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'goals', pathMatch: 'full' },
  { path: 'goals', component: GoalsComponent },
  { path: 'add-goal', component: GoalFormComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'add-reward', component: RewardFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Remplacé forChild par forRoot car c'est le module principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
