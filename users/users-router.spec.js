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
  it("should GET a specific user", async () => {
    await request(server)
      .get("/api/users/2")
      .set("Authorization", token)
      .expect(200);
  });
  it("should DELETE a specific user", async () => {
    await request(server)
      .delete("/api/users/4")
      .set("Authorization", token)
      .expect(200);
  });
});
