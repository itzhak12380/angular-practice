import { EType } from "./movies.enum";
export interface IMovie {
    name: string;
    rating: number;
    releaseDate:Date;
    type:EType;
}

