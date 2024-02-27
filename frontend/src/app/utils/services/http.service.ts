import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, throwError } from 'rxjs';
import { catchError, concatMap, map, share, tap } from 'rxjs/operators';
import {
    ApiResponseEnumModel,
    ApiResponseEnumModelObject,
    ApiResponseModel,
    EError400Msg,
    EErrorMsgCore,
    IConfigGetAll,
    IError,
    IResultSingle,
    TConfigErrorValidation,
    TError400Msg,
} from '../interfaces';
import { environment } from '../../../environments/environment';
import { ErrorGeneric } from '../models';
import { PendingService } from './pending.service';
import { AuthGenericService } from './auth-generic.service';

type TModelES<T> = { [key in keyof T]: string };

const API_URL = `${environment.apiUrl}`;

const defaultConfig: IConfigGetAll = {
    clearNullable: true,
};

@Injectable({
    providedIn: 'root',
})
export class HttpService<TFind, TCreate = TFind, TEdit = TCreate> {
    //private modelEs: TModelES<TFind | TCreate | TEdit>;

    constructor(
        private http: HttpClient,
        private authGeneric: AuthGenericService,
        //private pendingService: PendingService
    ) { }

    findAll<T = TFind>(endpoint: string, queryString: string = '', config?: IConfigGetAll): Observable<ApiResponseModel<T>> {
        const url = `${API_URL}${endpoint}`;

        return this.http.get<ApiResponseModel<T>>(url, this.authGeneric.headers).pipe(
            catchError(error => {
                if (!config?.hiddenError) {
                    console.error('Error occurred:', error);
                }
                return throwError(error);
            }),
            share()
        );
    }

}