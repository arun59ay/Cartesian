import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RawDataComponent } from './Pages/raw-data/raw-data.component';
import { ReviewDataComponent } from './Pages/review-data/review-data.component';
import { SolusComponent } from './Pages/solus/solus.component';

const routes: Routes = [
  { path: '', redirectTo: 'raw-data', pathMatch: 'full' },
  { path: 'raw-data', component: RawDataComponent },
  { path: 'review-data', component: ReviewDataComponent },
  { path: 'solus', component: SolusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
