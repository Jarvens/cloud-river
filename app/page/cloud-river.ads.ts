import {Component,OnInit} from '@angular/core';
import {INglDatatableSort, INglDatatableRowClick} from 'ng-lightning/ng-lightning';
const DATA = [
	{ rank: 1, name: '中国招商银行', surname: '招商', mobile:'010-123456',address:'北京市王府井',points: 38387 },
	{ rank: 2, name: '中国建设银行', surname: '建设', mobile:'010-123456',address:'北京市王府井',points: 36928 },
	{ rank: 3, name: '中国农业银行', surname: '农业', mobile:'010-123456',address:'北京市王府井',points: 33643 },
	{ rank: 4, name: '中国邮政储蓄', surname: '邮政', mobile:'010-123456',address:'北京市王府井',points: 32292 },
	{ rank: 5, name: '中国工商银行', surname: '工商', mobile:'010-123456',address:'北京市王府井',points: 31419 },
];
@Component({
	selector: 'cloud-river-ads',
	templateUrl: 'app/page/cloud-river.ads.html'
})
export class CloudRiverAds implements OnInit {
	ngOnInit (): void {
	}

	data = DATA;

	// Initial sort
	sort: INglDatatableSort = { key: 'rank', order: 'asc' };

	// Show loading overlay
	loading = false;

	// Toggle name column
	hideName = false;

	// Custom sort function
	onSort($event: INglDatatableSort) {
		const { key, order } = $event;
		this.data.sort((a: any, b: any) => {
			return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
		});
	}

	toggleData() {
		this.data = this.data ? null : DATA;
	}

	onRowClick($event: INglDatatableRowClick) {
		console.log('clicked row', $event.data);
	}

	//模态层用法
	opened: boolean = false;
	size: string;

	noHeader: boolean = false;
	noFooter: boolean = false;
	directional: boolean = false;

	open(size?: string) {
		this.size = size;
		this.opened = !this.opened;
	}

	cancel() {
		this.opened = false;
	}

}