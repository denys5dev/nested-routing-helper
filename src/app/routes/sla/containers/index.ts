import { CommentsComponent } from 'src/app/routes/sla/containers/comments/comments.component';
import { GeneralComponent } from 'src/app/routes/sla/containers/general/general.component';
import { SlaDetailsComponent } from 'src/app/routes/sla/containers/sla-details/sla-details.component';
import { SlaComponent } from 'src/app/routes/sla/containers/sla/sla.component';

export const containers: any[] = [
  SlaComponent,
  SlaDetailsComponent,
  CommentsComponent,
  GeneralComponent,
];

export * from './sla/sla.component';
export * from './sla-details/sla-details.component';
export * from './comments/comments.component';
export * from './general/general.component';
