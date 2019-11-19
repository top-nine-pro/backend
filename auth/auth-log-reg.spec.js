const request = require("supertest");
const server = require("../api/server");

// Test for registering a new user
describe("auth-log-reg", () => {
  describe("/register", () => {
    it("should allow the user to create an account", async function() {
      await request(server)
        .post("/api/auth/register")
        .send({
          username: "TestingAccount",
          password: "TestingPassword",
          email: "TestingAccount.Dev@top-nine.com"
        })
        .expect(201);
    });
  });
});
