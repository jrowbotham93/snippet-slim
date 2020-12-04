import { Context, HttpRequest } from "@azure/functions";
import { standardizeResponse } from "../utils/responses/response";
import controllerRead from "../controllers/read";
import database from "../main";

export async function read(context: Context, req: HttpRequest): Promise<any> {
  return await controllerRead(req, database)
    .then((response: any) => {
      return standardizeResponse(response);
    })
    .catch((error) => {
      return standardizeResponse({ code: error }, 400);
    });
}
