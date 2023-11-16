import {collectionResponseSchema, postDateSchema} from "../src";

test('Should parse collection successful', ()=>{

    const result = collectionResponseSchema(postDateSchema).safeParse({
        data: [ "date1", "date2"],
        total: 2,
        totalPages: 3,
    })

    expect(result.success).toBeTruthy()
})


test('Should not parse collection', ()=>{

    const result = collectionResponseSchema(postDateSchema).safeParse({
        data: [ "date1", "date2"],
        totalPages: 3,
    });

    expect(result.success).toBeFalsy();

    const resultInvalidData = collectionResponseSchema(postDateSchema).safeParse({
        data: [ 1, "date2"],
        totalPages: 3,
        total: 2,
    });

    expect(resultInvalidData.success).toBeFalsy()
})