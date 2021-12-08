import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.SlaComponent,
  },
  {
    path: ':id/:sla',
    component: fromContainers.SlaDetailsComponent,
    children: [
      {
        path: 'edit',
        component: fromContainers.GeneralComponent,
      },
      {
        path: 'view',
        component: fromContainers.GeneralComponent,
      },
      {
        path: 'comments',
        component: fromContainers.CommentsComponent,
      },
      {
        path: 'technical-objectives',
        loadChildren: () =>
          import(
            'src/app/routes/sla/submodules/technical-objectives/technical-objectives.module'
          ).then((m) => m.TechnicalObjectivesModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...fromContainers.containers],
})
export class SlaModule {}
