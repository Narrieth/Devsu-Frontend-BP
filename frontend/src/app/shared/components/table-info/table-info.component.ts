import { Component, Input, OnInit } from '@angular/core';
import { IPageInfo } from '../../../utils/services/page.service';
//import { IPageInfo } from 'src/app/utils';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrl: './table-info.component.css'
})
export class TableInfoComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() empty: boolean = false;
  @Input() info: IPageInfo = {
    perPage: 0,
    page: 0,
    total: 0,
  };
  offset:number = 1
  get startPage(): number {
    if (!this.info.page || !this.info.total) return 0;
    if(this.info.page === 1) return this.info.page;
    
    this.offset += this.info.perPage
    return (this.info.perPage * (this.info.page - 1)) + 1;
  }

  get finishPage(): number {
    const currentFinish = this.info.page * this.info.perPage;

    if (!currentFinish) return 0;
    if (this.info.total - currentFinish > 0) return currentFinish;
    if (this.info.total - currentFinish <= 0) return this.total;
    return this.info.total - currentFinish - this.info.perPage;
  }

  get total(): number {
    if (!this.startPage) return 0;
    return this.info.total;
  }

  constructor() {}
  ngOnInit(): void {}

}
