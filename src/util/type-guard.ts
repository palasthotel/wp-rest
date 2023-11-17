import {TaxonomyQuery} from "../@types";
import {taxonomyQuerySchema} from "../schema";
import {z} from "zod";

export const isTaxonomyQueryArg = (arg: any): arg is TaxonomyQuery => {
    const result = taxonomyQuerySchema.safeParse(arg);
    return result.success;
}

export const isParseError = (parsed: any): parsed is z.ZodError => parsed instanceof z.ZodError;
export const isError = (parsed: any): parsed is Error => parsed instanceof Error;