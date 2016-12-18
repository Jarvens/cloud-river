//路由链路
import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{Index}from '../page/index';
import {CloudRiverButton} from '../page/cloud-river.button';
const routes: Routes = [
	{path: '', redirectTo: '/index', pathMatch: 'full'},
	{path:'index',component:Index},
	{path:'buttons',component:CloudRiverButton}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule{

}