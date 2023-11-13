import {TaxonomyQuery} from "../@types/general";
import {taxonomyQuerySchema} from "../schema";

export const isTaxonomyQueryArg = (arg: any): arg is TaxonomyQuery => {
    const result = taxonomyQuerySchema.safeParse(arg);
    return result.success;
}