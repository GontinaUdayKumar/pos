import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardService } from './service/dashboard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
