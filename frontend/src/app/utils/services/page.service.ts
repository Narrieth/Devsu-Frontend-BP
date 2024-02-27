import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TModeFilter } from '../interfaces/global.interfaces';
import { configTable } from '../config/table';
import { dafaultTime } from '../config/global.config';

export interface IPageInfo {
    perPage: number;
    page: number;
    total: number;
}

export interface ArgsPage {
    perPage?: number;
    page?: number;
    mode?: TModeFilter;
}

export class Pager {
    private _pageLength = configTable.limitPerPage;
    private _pageLengthMin = configTable.minResultResult;
    private _pageLengthMax = configTable.maxResultResult;

    private _page = configTable.startInitial;
    private _pageMin = configTable.startInitial;
    private _pageMax = configTable.startInitial;

    private _count = 0;

    private _initPage = configTable.startInitial;
    private _initPerPage = configTable.limitPerPage;

    debouncer$ = new BehaviorSubject<number>(0);
    private debouncerSubject$ = new Subject();
    private debouncerCount = 0;

    constructor(args?: ArgsPage) {
        const { perPage, page, mode } = args || {};

        if (perPage) this._pageLength = perPage;
        if (perPage) this._initPerPage = perPage;

        if (page) this._page = page;
        if (page) this._initPage = page;

        mode === 'server' && this.debouncerSubject$.pipe(debounceTime(dafaultTime)).subscribe((e) => this.debouncer$.next(++this.debouncerCount));
    }

    get page() {
        return this._page || 1;
    }

    get perPage() {
        return this._pageLength;
    }

    get pageLength() {
        return this._pageLength;
    }

    get pageLengthMax() {
        return this._pageLengthMax;
    }
    get pageLengthMin() {
        return this._pageLengthMin;
    }

    get total(): number {
        if (!this._pageLength) return 0;

        return Math.ceil(this._count / this._pageLength);
    }

    get info(): IPageInfo {
        return {
            page: this.page,
            perPage: this.perPage,
            total: this._count,
        };
    }

    get isMaxPager(): boolean {
        return this.info.total <= this.info.page * this.info.perPage
    }

    public setCount = (count: number) => {
        this._count = count;
        this.rePageMax();
    };

    private rePageMax() {
        this._pageMax = Math.ceil(this._count / this._pageLength);
    }

    public resetPaginate = () => {
        this._page = this._initPage;
        this._pageLength = this._initPerPage;
    };

    public resetPage = () => {
        this._page = this._initPage;
    };

      public setPageLenUp = (up: boolean) => {
        const _pLength = this._pageLength;
        if (up && _pLength < this._pageLengthMax) this._pageLength = _pLength + 1;
        if (!up && _pLength > this._pageLengthMin) this._pageLength = _pLength - 1;

        this.rePageMax();
        this.debouncerSubject$.next(undefined);
      };

      public setPageUp = (up: boolean) => {
        const _page = this._page + (up ? 1 : -1);

        if (!(this._pageMin <= _page && _page <= this._pageMax)) return;

        this._page = _page;
        this.debouncerSubject$.next(undefined);
      };

      public setPerPage = (pageLength: number) => {
        this._pageLength = pageLength;

        this.debouncerSubject$.next(undefined);
      };
}
