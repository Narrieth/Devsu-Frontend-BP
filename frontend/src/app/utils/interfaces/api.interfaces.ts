export enum StatusCode {
  ok = 1000,
  success = 1000,
  created = 2001,
  updated = 2002,
  deleted = 2003,
  authenticated = 4000,
  errRequest = -1000,
  notFound = -2000,
  alreadyExist = -2001,
  validationFailed = -2004,
  tokenExpired = -2008,
  errorAuthentication = -4000,
  errorAuthorization = -4001,
  serverError = -5000,
}

export interface ApiResponseEnumModel<T = object> {
//   data: Array<TEnumLocalize<T>>;
  message: Array<string>;
  timestamp: string;
  count: number;
  statuscode: StatusCode;
}

export interface ApiResponseEnumModelObject<T = object> {
//   data: TEnumLocalize<T>;
  message: Array<string>;
  timestamp: string;
  count: number;
  statuscode: StatusCode;
}

export interface ApiResponseModel<T = void, MT = string> {
  //data: Array<T>;
  message: Array<MT>;
  timestamp: string;
  count: number;
  statuscode: StatusCode;
}

export interface IResultSingle<T = void> {
  data: T;
  message: string[];
  timestamp: string;
  count: number;
  statuscode: StatusCode;
}

export interface IError<T = void> {
  headers: IHeaders;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: ApiResponseModel<T>;
}

export interface ICreatedDate {
  date: string;
  timezone_type: number;
  timezone: string | 'UTC';
}

export interface IHeaders {
  normalizedNames: any;
  lazyUpdate: null;
}

export type sDate = /* `${number}-${number}-${number}` */ Date;
export type sDateTime = /* `${sDate} ${sTime}` */ Date;
export type sDateEs = /* `${number}/${number}/${number}` */ Date;

export type sFilter = string | number | boolean | null | string[];

type TCode = `${number}${string}`;
export type sId = `${TCode}-${TCode}-${TCode}-${TCode}-${TCode}`;
