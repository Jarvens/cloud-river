//路由链路
import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import{Index}from '../page/index';
import {CloudRiverButton} from '../page/cloud-river.button';
import {CloudRiverForm} from '../page/cloud-river.form';
import {CloudRiverAds} from '../page/cloud-river.ads';
const routes: Routes = [
	{path: '', redirectTo: '/index', pathMatch: 'full'},
	{path: 'index', component: Index},
	{path: 'buttons', component: CloudRiverButton},
	{path: 'cloud-river-form', component: CloudRiverForm},
	{path: 'cloud-river-ads', component: CloudRiverAds}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}