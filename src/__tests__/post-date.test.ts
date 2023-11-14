import { expect, test } from 'vitest'
import {postDateSchema} from "../schema";

test("Should parse successfully", ()=>{

    const result = postDateSchema.safeParse("2019-11-30 23:00:09");
    expect(result.success).toBeTruthy()
})