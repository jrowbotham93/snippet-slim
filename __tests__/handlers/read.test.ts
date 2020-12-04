import { read } from "../../src/handlers/read";
const {
  runStubFunctionFromBindings,
  createHttpTrigger,
} = require("stub-azure-function-context");

describe("valid request, response 200", () => {
  it("returns 200", async () => {
    const { res } = await runStubFunctionFromBindings(
      read,
      [
        {
          type: "httpTrigger",
          name: "req",
          direction: "in",
          data: createHttpTrigger("GET", "http://example.com"),
        },
        {
          type: "http",
          name: "res",
          direction: "out",
          param: { id: "test-id" },
        },
      ],
      new Date()
    );
    expect(res.statusCode).toEqual(200);
  });
});
