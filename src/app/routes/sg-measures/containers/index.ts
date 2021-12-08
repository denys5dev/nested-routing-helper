import { SgActionsComponent } from 'src/app/routes/sg-measures/containers/sg-actions/sg-actions.component';
import { SgFrequencyComponent } from 'src/app/routes/sg-measures/containers/sg-frequency/sg-frequency.component';
import { SgMeasuresAddComponent } from 'src/app/routes/sg-measures/containers/sg-measures-add/sg-measures-add.component';

export const containers: any[] = [
  SgMeasuresAddComponent,
  SgActionsComponent,
  SgFrequencyComponent,
];

export * from './sg-measures-add/sg-measures-add.component';
export * from './sg-actions/sg-actions.component';
export * from './sg-frequency/sg-frequency.component';
