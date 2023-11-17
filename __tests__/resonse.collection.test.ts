import {z} from "zod";
import {responseAsCollection, isParseError} from "../src";

test("Should transform to collection response", async ()=>{
    const p: Promise<Response> = new Promise(resolve => {
        resolve({
            headers: {
                get(_){
                    return "0";
                }
            },
            async json(){
                return ["a", "b", "c"]
            }
        } as Response);
    });

    const result = await p.then(responseAsCollection(z.string().array()));

    expect(result).toEqual({
        data: ["a", "b", "c"],
        total: 0,
        totalPages: 0,
    })
});

test("Should transform to collection with null", async ()=>{
    const p: Promise<Response> = new Promise(resolve => {
        resolve({
            headers: {
                get(_){
                    return "2";
                }
            },
            async json(){
                return "false";
            }
        } as Response);
    });

    const result = await p.then(responseAsCollection(z.number().array()))
    expect(isParseError(result)).toBeTruthy();
});