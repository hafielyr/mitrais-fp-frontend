import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { DetailCardComponent } from './detail-card/detail-card.component';

const appRoutes: Routes = [
  
  { path: 'employee/:id',component: FormComponent},
  { path: 'add', component: FormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'detail' }
];

export const routing = RouterModule.forRoot(appRoutes);
