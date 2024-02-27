import { Component } from '@angular/core';
import { FinancialProd } from '../helpers';
import { BehaviorSubject, Subject, Subscription, finalize } from 'rxjs';
import { IFinancialProductRegisterInfo } from '../models/product.interface';
import { ProductService } from '../services';
import { configTable } from '../../../utils/config/table';
import { QueryString } from '../../../utils/services/queryString.service';
import { Pager, sId } from '../../../utils';
import { initQueryTable } from '../../../utils/constant/getAll.constant';
import { ProductCreateModel } from '../models/product-create.mode';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  pager = new Pager({ mode: 'server' });
  financialProd = FinancialProd;
  financialProducts: IFinancialProductRegisterInfo[] = [];
  isLoading$ = new BehaviorSubject<boolean>(false);
  dtTrigger: Subject<any> = new Subject<any>();
  queryString!: QueryString<IFinancialProductRegisterInfo>;
  showTableMenu = false;
  dtOptions: DataTables.Settings = {};

  pageLength = configTable.limitPerPage;
  pageLengthMin = configTable.minResultResult;
  pageLengthMax = configTable.maxResultResult;
  page = configTable.startInitial;
  pageMin = configTable.startInitial;
  pageMax = configTable.startInitial;

  private unsubscribe: Subscription[] = [];


  constructor(private productService: ProductService) {
    this.queryString = new QueryString<IFinancialProductRegisterInfo>(initQueryTable);
    this.pager.debouncer$.subscribe((count) => count && this.getAll(true));
  }

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        info: '',
        infoEmpty: '',
        emptyTable: '',
        zeroRecords: ''
      },
      pageLength: this.pageLength,
      dom: 'Brti',
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          searchable: false,
        },
      ],
      destroy: true,
    };

    this.getAll();
  }

  getAll(destroy?: boolean) {
    this.isLoading$.next(true);
    const subs = this.productService
      .findAll(this.queryString.string)
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe((res) => {
        if (!res) {
          this.financialProducts = [];
          this.dtTrigger.next(undefined);
          return;
        }

        const { count, data } = res;
        this.pager.setCount(count);
        this.financialProducts = res;
        this.dtTrigger.next(undefined);
      });
    this.unsubscribe.push(subs);
  }

  private reFindAll(debounce?: boolean) {
    this.queryString.setPage(this.pager.page);
    this.queryString.setPageSize(this.pager.pageLength);

    !debounce && this.getAll(true);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value || '';
    this.queryString.setSearch(value);
    this.pager.resetPaginate();

    this.reFindAll();
  }

  pageLenChange(up: boolean) {
    this.pager.setPageLenUp(up);
    this.pager.resetPage();

    this.reFindAll(true);
  }

  pageChange(up: boolean) {
    this.pager.setPageUp(up);
    this.pager.page !== this.queryString.getPage() && this.reFindAll(true);
  }

  // addFinancialProduct(data?: ProductCreateModel) {
  // }
}