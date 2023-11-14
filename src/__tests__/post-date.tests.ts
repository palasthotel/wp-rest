import {postDateSchema} from "../schema";

it("Should parse successfully", ()=>{

    const result = postDateSchema.safeParse("2019-11-30 23:00:09");
    expect(result.success).toBeTruthy()
})