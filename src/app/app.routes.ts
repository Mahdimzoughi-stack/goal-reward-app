import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGoalsComponent } from './goal/list-goals.component';
import { GoalFormComponent } from './goal/goal-form.component';
import { ListRewardsComponent } from './reward/list-rewards.component';
import { RewardFormComponent } from './reward/reward-form.component';

export const routes: Routes = [
  // Routes des Goals
  { path: 'goals', component: ListGoalsComponent },
  { path: 'goals/add', component: GoalFormComponent },
  { path: 'goals/edit/:id', component: GoalFormComponent },

  // Routes des Rewards
  { path: 'rewards', component: ListRewardsComponent },
  { path: 'rewards/add', component: RewardFormComponent },
  { path: 'rewards/edit/:id', component: RewardFormComponent },

  // Redirection par défaut
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  { path: '**', redirectTo: '/goals' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
