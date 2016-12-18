import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
	selector:'cloud-river-login',
	templateUrl:'app/page/cloud-river.login.html'
})
export class CloudRiverLogin implements OnInit{
	ngOnInit (): void {
	}

	constructor (private router:Router) {
	}
	login(){
		this.router.navigate(['/index']);
	}
}