import {entityMetaSchema} from "../src";

test("Should parse empty meta as array", ()=>{
    const result = entityMetaSchema.safeParse([]);
    expect(result.success).toBeTruthy()
});

test("Should parse array meta as array", ()=>{
    const result = entityMetaSchema.safeParse( {
        "string": "",
        "boolean": false,
        "number": 7,
        "null": null,
    });
    expect(result.success).toBeTruthy()
});