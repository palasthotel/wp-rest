import { expect, test } from 'vitest'
import {authorizationHeaders} from "../request/auth";

test("Should add auth header", ()=> {
    const value = authorizationHeaders("my","pass");
    expect(value).toEqual({
        "Authorization": "Basic bXk6cGFzcw==",
    })
})