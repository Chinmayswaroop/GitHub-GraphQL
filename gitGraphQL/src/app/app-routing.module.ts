import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitCardDetailViewComponent } from './git-card-detail-view/git-card-detail-view.component';
import { GitCardViewComponent } from './git-card-view/git-card-view.component';


const routes: Routes = [
  {
    path: '',
    component: GitCardViewComponent,
  },
  {
    path: 'detail/:name',
    component: GitCardDetailViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

