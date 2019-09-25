import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

const routes: Routes = [
  {path: 'server-element', component:ServerElementComponent},
  {path: 'cockpit', component:CockpitComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
