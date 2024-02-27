import { sDateTime, sId } from "../../../utils";

export interface IFinancialProd {
  id: sId;
  name: string;
  description: string;
  logo: string;
  date_release: sDateTime;
  date_revision: sDateTime;
}

export interface IFinancialProductRegisterInfo extends Pick<IFinancialProd, 'id' | 'name' | 'description' | 'logo' | 'date_release' | 'date_revision'> {}
