import {postDateSchema} from "../src";
test("Should parse successfully", ()=>{
    const result = postDateSchema.safeParse("2023-11-15T05:02:00");
    expect(result.success).toBeTruthy()
});