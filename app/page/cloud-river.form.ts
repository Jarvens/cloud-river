import {Component,OnInit} from '@angular/core';
@Component({
	selector:'cloud-river-form',
	templateUrl:'app/page/cloud-river.form.html'
})
export class CloudRiverForm implements OnInit{
	required = false;
	hasError = false;
	error = 'The input has an error!';

	days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
	ngOnInit (): void {
	}

	constructor () {
	}
}