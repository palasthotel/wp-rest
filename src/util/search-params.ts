import {TaxonomyQuery} from "../@types";
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
                if(typeof v == "string" || typeof v == "number") {
                    searchParams.append(`${key}[]`, `${v}`);
                }
            })
        } else if(typeof value == "string" || typeof value == "number" || typeof value == "boolean") {
            searchParams.append(key, value+"");
        } else {
            console.warn("wp-rest: Could not add search param ", key, value);
        }
    });
}

export const searchParamsAddTaxonomyQuery = (searchParams: URLSearchParams, taxonomy: string, query: TaxonomyQuery) => {
    const terms = typeof query.terms == "string" ? query.terms : query.terms.join(",");
    searchParams.append(`${taxonomy}[operator]`, query.operator);
    searchParams.append(`${taxonomy}[terms]`, terms);
}