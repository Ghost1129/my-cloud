import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InstanceComponent } from './instance/instance.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'instance', component: InstanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
