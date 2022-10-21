import { adherent } from "../adherent/adherent";

export interface emprunt{

    id_emprunt: number;
    dateEmp: String;
    dateRet: String;
    adherent:adherent;
    id_document:number;
}