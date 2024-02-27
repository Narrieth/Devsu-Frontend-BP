import { sDateTime, sId } from "../../../utils";
import { IFinancialProductRegisterInfo } from "./product.interface";

export class ProductCreateModel implements IFinancialProductRegisterInfo {
    id: sId;
    name: string;
    description: string;
    logo: string;
    date_release: sDateTime;
    date_revision: sDateTime;
    constructor(prod?: IFinancialProductRegisterInfo) {
        this.id = prod?.id! || '';
        this.name = prod?.name || '';
        this.description = prod?.description || '';
        this.logo = prod?.logo || '';
        this.date_release = prod?.date_release! || '';
        this.date_revision = prod?.date_revision! || '';

    }
}