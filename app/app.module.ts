import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NglModule} from 'ng-lightning/ng-lightning';
import {AppComponent}  from './app.component';
import {AppRoutingModule} from './router/app.routing';
import {Index} from './page/index';
import {CloudRiverButton} from './page/cloud-river.button';
import {CloudRiverForm} from './page/cloud-river.form';

@NgModule({
	imports: [BrowserModule,
		NglModule.forRoot(),
		AppRoutingModule,
		FormsModule],
	declarations: [AppComponent,
		Index,
		CloudRiverButton,
		CloudRiverForm],
	bootstrap: [AppComponent]
})
export class AppModule {
}
