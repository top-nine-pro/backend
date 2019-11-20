const request = require("supertest");
const server = require("../api/server");

describe("server", () => {
  describe("server status", () => {
    it("should return a 200 status, server up", async () => {
      await request(server).get("/");
      expect(200);
    });
    it("shoulder return, using testing env", async () => {
      await request(server).get("/");
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});
