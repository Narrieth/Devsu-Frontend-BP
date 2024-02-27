import { FormControl, FormGroup } from '@angular/forms';
import { sId } from './api.interfaces';

export type TypeFromEnum<T> = `${Extract<T, string>}`; /* extends `${infer N extends string}` ? N : never; */

export type TypeKeyFromEnum<T> = keyof T;

export type TView = 'create' | 'edit' | 'list' | undefined;

/** Formato de fecha dd/MM/yyyy
 * @example 10/28/2022 */
export type TDateES = `${number}/${number}/${number}`;

/** Formato de fecha yyyy-MM-dd
 * @example 2022-10-28 */
export type TDateDB = `${number}-${number}-${number}`;





export enum ETypeTitle {
  'viewer' = 'Ver',
  'list' = 'Listado',
  'create' = 'Crear',
  'update' = 'Actualizar',
}
export type TTypeTitle = keyof typeof ETypeTitle;

export type TTypeForm = 'create' | 'update';

export type TTypeFormExtends = TTypeForm | 'viewer';

export type KeyLoad = { [key: string]: boolean };

export type ModelFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
export interface IModelSingle<T = sId, E = string> {
  id: T;
  name: E;
}

export type IEnum<E> = { [key in keyof E]: string };
export type IEnumObject<T extends string | number | symbol = string> = { [key in T]: string };

export type TDatePeriod = 'pass' | 'present' | 'future';

export type TModeFilter = 'local' | 'server';