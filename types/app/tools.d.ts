export declare function fetchJson(uri: string): Promise<any>;
export declare function loader(uri: string, success: string, failure: string): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<any>, void, {
    data: any;
    err: any;
}>;
