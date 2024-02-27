import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { ApiResponseModel } from '../../../utils';
import { IFinancialProductRegisterInfo } from '../models/product.interface';
import { HttpProductService } from './http/http-product.service';


@Injectable({
    providedIn: 'root',
})

export class ProductService {
    isLoading$: Observable<boolean>;
    isLoadingSubject: BehaviorSubject<boolean>;

    constructor(private httpProductService: HttpProductService) {
        this.isLoadingSubject = new BehaviorSubject<boolean>(false);
        this.isLoading$ = this.isLoadingSubject.asObservable();
    }

    findAll(queryString?: string): Observable<IFinancialProductRegisterInfo[] | any> {
        this.isLoadingSubject.next(true);
        return this.httpProductService.findAll(queryString).pipe(
            map((resp) => ( resp ? resp : [])),
            catchError(error => {
                console.error('Error occurred:', error);
                return of(undefined);
            })
        );
    }
}
