import {authorizationHeaders} from "../src";

test("Should add auth header", ()=> {
    const value = authorizationHeaders("my","pass");
    expect(value).toEqual({
        "Authorization": "Basic bXk6cGFzcw==",
    })
})