import {z} from "zod";
import {isParseError, sustainingParse} from "../util";

export const responseAsEntity = <Type extends z.ZodTypeAny>(
    item: Type
) => async (res: Response) => {
    try {
        const json = await res.json();
        const result = sustainingParse(json, item);
        if(isParseError(result)){
            return result;
        }
        return result;
    } catch (e) {
        return e as Error;
    }
}