import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Importation des composants
import { GoalsComponent } from './goal/goals/goals.component';
import { GoalFormComponent } from './goal/goal-form/goal-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    GoalsComponent,
    GoalFormComponent
  ],
  providers: [
    DatePipe
  ],
  exports: [
    GoalsComponent,
    GoalFormComponent
  ]
})
export class ComponentsModule { }
