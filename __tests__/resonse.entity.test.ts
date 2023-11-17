import {z} from "zod";
import {isError, isParseError, responseAsEntity} from "../src";

const entitySchema = z.object({
    title: z.string(),
});

test("Should transform to entity response", async ()=>{
    const p: Promise<Response> = new Promise(resolve => {
        resolve({
            async json(){
                return {
                    title: "test",
                }
            }
        } as Response);
    });

    const result = await p.then(responseAsEntity(entitySchema));

    expect(result).toEqual({
        title: "test",
    })
});

test("Should transform to zod error", async ()=>{
    const p: Promise<Response> = new Promise(resolve => {
        resolve({
            async json(){
                return "false";
            }
        } as Response);
    });

    const result = await p.then(responseAsEntity(z.number()))
    expect(isParseError(result)).toBeTruthy();
});


test("Should  return error", async ()=>{
    const p: Promise<Response> = new Promise(resolve => {
        resolve({
            async json(){
                throw new Error("Fuck");
                return {
                    title: "test",
                };
            }
        } as Response);
    });

    const result = await p.then(responseAsEntity(z.number().array()))
    expect(isError(result)).toBeTruthy();
});