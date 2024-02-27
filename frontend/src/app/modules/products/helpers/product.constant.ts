import { IFinancialProd } from "../models/product.interface";


export const FinancialProd: { [key in keyof IFinancialProd]: string } = {
  id: 'Id',
  name: 'Nombre del producto',
  description: 'Descripción',
  logo: 'Logo',
  date_release: 'Fecha de liberación',
  date_revision: 'Fecha de reestructuración',
};

