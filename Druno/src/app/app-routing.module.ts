import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeysComponent } from './keys/keys.component';

const routes: Routes = [
  {
  path: 'keys',
  component: KeysComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
