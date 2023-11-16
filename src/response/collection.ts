import {z} from "zod";
import {collectionResponseSchema} from "../schema";
import {getPaginationHeaders} from "../util";

export const responseAsCollection = <Type extends z.ZodTypeAny>(
    item: Type
) => async (res: Response) => {
    return collectionResponseSchema(item).parse({
        data: await res.json(),
        ...getPaginationHeaders(res),
    });
}