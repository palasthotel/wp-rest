import {responseAsCollection} from "../src/response/collection";
import {z} from "zod";

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

    const result = await p.then(responseAsCollection(z.string()));

    expect(result).toEqual({
        data: ["a", "b", "c"],
        total: 0,
        totalPages: 0,
    })
})