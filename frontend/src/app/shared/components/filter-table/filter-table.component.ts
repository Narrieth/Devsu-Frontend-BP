import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IFinancialProductRegisterInfo } from '../../../modules/products/models/product.interface';
import { IModelSingle, TModeFilter } from '../../../utils';
import { dafaultTime } from '../../../utils/config/global.config';

@Component({
  selector: 'filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
})
export class FilterTableComponent implements OnInit {
  @Input() showTableMenu!: boolean;
  @Input() pageLength: number = 20;
  @Input() page: number = 1;
  @Input() disabledPageUp?: boolean = false;
  @Input() product: IFinancialProductRegisterInfo[] = [];
  @Input() mode: TModeFilter = 'local';
  @Input() showSearch: boolean = true;
  @Input() dataFilter: { active: boolean, signed?: boolean, payStatus?: boolean, required?: boolean } = {
    active: false,
    signed: false,
    payStatus: false,
    required: false
  };
  @Input() autocomplete: boolean = false;

  @Output('pageChange') _pageChange: EventEmitter<boolean> = new EventEmitter();
  @Output('pageLenChange') _pageLenChange: EventEmitter<boolean> = new EventEmitter();
  @Output('search') _search: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output('onSearch') _onSearch: EventEmitter<string> = new EventEmitter();
  isActive: '' | '1' | '0' = '1';
  isRequired: '' | '1' | '0' = '';
  isSigned: '' | '1' | '0' = '1';
  currentStatus: string = '';
  productsToSearch: IModelSingle[] = [];
  private debouncerSearch: Subject<KeyboardEvent> = new Subject();

  get disabledPageDown(): boolean {
    return this.page <= 1;
  }

  get disabledPageLengthDown(): boolean {
    return this.pageLength <= 1;
  }

  ngOnInit(): void {
    if (this.mode === 'server') this.debouncerSearch.pipe(debounceTime(dafaultTime)).subscribe((e) => this.emiterSearch(e));
  }

  private emiterSearch(e: KeyboardEvent) {
    const _q = <string>(e.target as HTMLInputElement).value;

    this._search.emit(e);
    this._onSearch.emit(_q);
  }

  pageChange(up: boolean) {
    this._pageChange.emit(up);
  }

  pageLenChange(up: boolean) {
    this._pageLenChange.emit(up);
  }

  search(e: KeyboardEvent) {
    if (this.mode !== 'server') this.emiterSearch(e);
    else this.debouncerSearch.next(e);
  }
}
