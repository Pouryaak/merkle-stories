import { ResponseError } from "@/types/ResponseError";

export async function mFetch<T = any>(input: RequestInfo | URL): Promise<T> {
    // This function is built only for the purpose of this test, otherwise it can be adjusted to handle all 
    // kind of different requests with body validation and ...
    const res = await fetch(input);
    const data = await res.json();
    if (!res.ok) {
        throw new ResponseError("Bad response", res)
    }
    return data as T;
}