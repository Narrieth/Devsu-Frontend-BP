import { Injectable } from '@angular/core';
import { ApiResponseModel, HttpService } from '../../../../utils';
import { Observable } from 'rxjs';
import { IFinancialProductRegisterInfo } from '../../models/product.interface';

@Injectable({
    providedIn: 'root',
})

export class HttpProductService {
    private endpoint = '/bp/products';

    constructor(private httpService: HttpService<IFinancialProductRegisterInfo>) { }

    findAll(queryString?: string): Observable<ApiResponseModel<IFinancialProductRegisterInfo>> {
        return this.httpService.findAll(`${this.endpoint}`, queryString);
    }
}
