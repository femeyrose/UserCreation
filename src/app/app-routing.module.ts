import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component: UserComponent,
  
  },
  {
    path:'form',component: FormComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
