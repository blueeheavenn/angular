import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentersComponent } from './renters/renters.component';
import { OwnersComponent } from './owners/owners.component';
import { ErrorComponent } from './error.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'renters', component: RentersComponent },
  { path: 'owners', component: OwnersComponent },
  //{ path: '', redirectTo:/home}
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
