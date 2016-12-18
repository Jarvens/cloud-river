import {Component,OnInit} from '@angular/core';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
const DATA = [
	{rank: 1, name: '张三', surname: 'Abdul-Jabbar', points: 38387},
	{rank: 2, name: '李四', surname: 'Malone', points: 36928},
	{rank: 3, name: '小明', surname: 'Bryant', points: 33643},
	{rank: 4, name: '小花', surname: 'Jordan', points: 32292},
	{rank: 5, name: '小刘', surname: 'Chamberlain', points: 31419},
];
@Component({
	selector:'index',
	templateUrl:'app/page/index.html',
	styleUrls: ['app/app.css']
})
export class Index implements OnInit{
	ngOnInit (): void {
	}
	total = 120;
	pageDefault: number;
	pageBoundary: number;
	page: number;
	data = DATA;
	showDate: boolean = true;
	monthNames=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
	dayNamesShort=['日','一','二','三','四','五','六'];
	// Initial sort
	sort: INglDatatableSort = {key: 'rank', order: 'asc'};

	// Show loading overlay
	loading = false;

	// Toggle name column
	hideName = false;

	// Custom sort function
	onSort ($event: INglDatatableSort) {
		const {key, order} = $event;
		this.data.sort((a: any, b: any) => {
			return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
		});
	}

	toggleData () {
		this.data = this.data ? null : DATA;
	}

	onRowClick ($event: INglDatatableRowClick) {
		console.log('clicked row', $event.data);
	}

	date: Date;

	gotoDate () {
		this.showDate=false;
		this.date = new Date(2005, 10, 9);
	}
	pagechange(){
	}
	showAlert = false;

	show() {
		this.showAlert = true;
	}

	onClose(reason: string) {
		console.log(`Alert closed by ${reason}`);
		this.showAlert = false;
	}
}