import { PaysService } from "./pays";

export class Regions {

        id_regions !: number;
        nomregions !: string;
        coderegion !: string;
        activiterregion!: string;
        superficieregion!: string;
        languemregion !: string;
        images !: string;
        description !: string;
        nombrecommentaire !: string;
        pays!:PaysService
}
