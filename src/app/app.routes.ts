import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './components/goal/goals/goals.component';
import { GoalFormComponent } from './components/goal/goal-form/goal-form.component';
import { RewardsComponent } from './components/reward/rewards/rewards.component';
import { RewardFormComponent } from './components/reward/reward-form/reward-form.component';

export const routes: Routes = [
  // Routes des Objectifs (Goals)
  { path: 'goals', component: GoalsComponent },
  { path: 'goals/add', component: GoalFormComponent },
  { path: 'goals/edit/:id', component: GoalFormComponent },

  // Routes des Récompenses (Rewards)
  { path: 'rewards', component: RewardsComponent },
  { path: 'rewards/add', component: RewardFormComponent },
  { path: 'rewards/edit/:id', component: RewardFormComponent },

  // Redirection par défaut
  { path: '', redirectTo: '/goals', pathMatch: 'full' },
  { path: '**', redirectTo: '/goals' } // Gestion des erreurs de routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
