import {TaxonomyQuery} from "../@types/general";
import {isTaxonomyQueryArg} from "./type-guard";

export type SearchParamable = {
    [key: string]: string|number|boolean|TaxonomyQuery
}

export const setupSearchParams = (searchParams: URLSearchParams, params: SearchParamable) => {
    Object.entries(params).forEach(([key, value]) => {
        if(isTaxonomyQueryArg(value)){
            addTaxonomyQuery(searchParams, key, value);
        } else {
            searchParams.append(key, value+"");
        }
    });
}

export const addTaxonomyQuery = (searchParams: URLSearchParams, taxonomy: string, query: TaxonomyQuery) => {
    const terms = typeof query.terms == "string" ? query.terms : query.terms.join(",");
    searchParams.append(`${taxonomy}[operator]`, query.operator);
    searchParams.append(`${taxonomy}[terms]`, terms);
}