import { ResponseError } from "@/types/ResponseError";

export function handleError(err: unknown) {
    if (err instanceof ResponseError) {
        switch (err.response.status) {
            case 401:
                alert("The request lack valid authentication credentials")
                break;
            case 404:
                alert("Data not found!")
                break;
            case 500:
                alert("Internal server error")
                break;
            default:
                throw new Error('Unhandled fetch response', { cause: err })
        }
    }
    throw new Error('Unknown fetch error', { cause: err })
}