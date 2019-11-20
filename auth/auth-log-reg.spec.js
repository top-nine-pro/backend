const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig-Testing");

// Test for registering a new user
describe("auth-log-reg", () => {
  describe("/register and /login", () => {
    it("should allow the user to create an account", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({
          username: "TestingAccount",
          password: "TestingPassword",
          email: "TestingAccount.Dev@top-nine.com"
        })
        .expect(201);
    });
    it("should not allow the user to create an account", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({
          username: "TestingAccount"
        })
        .expect(400);
    });
    it("should allow the user to signin to account", async () => {
      await request(server)
        .post("/api/auth/login")
        .send({
          username: "TestingAccount",
          password: "TestingPassword"
        })
        .expect(200);
    });
    it("should not allow the user to signin to account", async () => {
      await request(server)
        .post("/api/auth/login")
        .send({
          username: "Testing Account"
        })
        .expect(401);
    });
  });
});
