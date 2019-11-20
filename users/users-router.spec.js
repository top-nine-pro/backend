const request = require("supertest");
const server = require("../api/server");

describe("users-router", () => {
  let token = null;

  beforeEach(done => {
    request(server)
      .post("/api/auth/login")
      .send({ username: "Tim", password: "NotTomFromMyspace" })
      .end((req, res) => {
        token = res.body.token;
        done();
      });
  });
  it("should GET a list of users", async () => {
    await request(server)
      .get("/api/users")
      .set("Authorization", token)
      .expect(200);
  });
});
