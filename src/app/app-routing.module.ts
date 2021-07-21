import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from "./components/main-component/main-component.component";
import { ChildComponentComponent } from "./components/child-component/child-component.component";


const routes: Routes = [
{ path: 'main', component: MainComponentComponent },
{ path: '',   redirectTo: '/main', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
