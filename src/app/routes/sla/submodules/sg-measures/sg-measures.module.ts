import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.SgMeasuresAddComponent,
    outlet: 'primary',
    children: [
      {
        path: 'frequency/:id',
        component: fromContainers.SgFrequencyComponent,
      },
      {
        path: 'actions/:id',
        component: fromContainers.SgActionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromContainers.containers],
})
export class SgMeasuresModule {}
