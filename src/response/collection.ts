import {z} from "zod";
import {getPaginationHeaders, isParseError, sustainingParse} from "../util";

export const responseAsCollection = <Type extends z.ZodArray<any>>(
    arraySchema: Type
) => async (res: Response) => {
    const json =  await res.json();
    const result = sustainingParse(json, arraySchema) ;
    if(isParseError(result)){
        return result;
    }
    return {
        data: result as z.infer<typeof arraySchema>,
        ...getPaginationHeaders(res),
    };
}