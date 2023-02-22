import { ResponseError } from "@/types/ResponseError";

export function handleError(err: unknown): void {
    if (err instanceof ResponseError) {
        switch (err.response.status) {
            case 401:
                alert("The request lacks valid authentication credentials.");
                break;
            case 404:
                alert("Data not found!");
                break;
            case 500:
                alert("Internal server error.");
                break;
            default:
                throw new Error('Unhandled fetch response');
        }
    } else {
        throw new Error('Unknown fetch error');
    }
}