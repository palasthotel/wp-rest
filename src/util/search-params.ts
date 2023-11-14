import {TaxonomyQuery} from "../@types/general";
import {isTaxonomyQueryArg} from "./type-guard";

export type SearchParamable = {
    [key: string]: string|string[]|number|number[]|boolean|TaxonomyQuery
}

export const searchParamsAdd = (searchParams: URLSearchParams, params: SearchParamable) => {
    Object.entries(params).forEach(([key, value]) => {
        if(isTaxonomyQueryArg(value)) {
            searchParamsAddTaxonomyQuery(searchParams, key, value);
        } else if(Array.isArray(value)) {
            value.forEach(v => {
                searchParams.append(`${key}[]`, `${v}`);
            })
        } else {
            searchParams.append(key, value+"");
        }
    });
}

export const searchParamsAddTaxonomyQuery = (searchParams: URLSearchParams, taxonomy: string, query: TaxonomyQuery) => {
    const terms = typeof query.terms == "string" ? query.terms : query.terms.join(",");
    searchParams.append(`${taxonomy}[operator]`, query.operator);
    searchParams.append(`${taxonomy}[terms]`, terms);
}