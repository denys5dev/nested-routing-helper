import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.ToComponent,
  },
  {
    path: ':id',
    component: fromContainers.ToDetailsComponent,
  },
  {
    path: ':id/measures',
    loadChildren: () =>
      import('src/app/routes/sg-measures/sg-measures.module').then(
        (m) => m.SgMeasuresModule
      ),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromContainers.containers],
})
export class TechnicalObjectivesModule {}
