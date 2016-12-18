import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NglModule} from 'ng-lightning/ng-lightning';
import {AppComponent}  from './app.component';
import {AppRoutingModule} from './router/app.routing';
import {Index} from './page/index';
import {CloudRiverButton} from './page/cloud-river.button';

@NgModule({
	imports: [BrowserModule, NglModule.forRoot(),AppRoutingModule],
	declarations: [AppComponent,Index,CloudRiverButton],
	bootstrap: [AppComponent]
})
export class AppModule {
}
