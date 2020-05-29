import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModuleComponent } from './modules/home-module/home-module.component';
import { HistoryModuleComponent } from './modules/history-module/history-module.component';
import { DedicateModuleComponent } from './modules/dedicate-module/dedicate-module.component';
import { StackModuleComponent } from './modules/stack-module/stack-module.component';
import { ProjectsModuleComponent } from './modules/projects-module/projects-module.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeModuleComponent,
  },
  {
    path: 'history',
    component: HistoryModuleComponent,
  },
  {
    path: 'dedicate',
    component: DedicateModuleComponent,
  },
  {
    path: 'stack',
    component: StackModuleComponent,
  },
  {
    path: 'projects',
    component: ProjectsModuleComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
