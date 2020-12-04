export interface FunctionResponse {
  statusCode: number;
  body: object;
  headers: Record<string, string>;
}

export function standardizeResponse(
  body: any,
  httpCode = 200
): FunctionResponse {
  return {
    statusCode: httpCode,
    body,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  };
}
