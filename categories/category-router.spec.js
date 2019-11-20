const request = require("supertest");
const server = require("../api/server");

// Need to have test for POST /api/categories
// Need to have test for PUT /api/categories/:id
// Need to have test for DELETE /api/categories/:id

describe("category-router", () => {
  let token = null;

  beforeEach(done => {
    request(server)
      .post("/api/auth/login")
      .send({
        username: "Tim",
        password: "NotTomFromMyspace"
      })
      .end((req, res) => {
        token = res.body.token;
        done();
      });
  });
  it("should get a list of categories", async () => {
    await request(server)
      .get("/api/categories")
      .set("Authorization", token)
      .expect(200);
  });
  it("should get a specific category", async () => {
    await request(server)
      .get("/api/categories/1")
      .set("Authorization", token)
      .expect(200);
  });
  it("should get a list of categories for a user", async () => {
    await request(server)
      .get("/api/categories/1/user")
      .set("Authorization", token)
      .expect(200);
  });
  it("should post a new category", async () => {
    await request(server)
      .post("/api/categories")
      .set("Authorization", token)
      .send({
        name: "Testing - House",
        imageUrl:
          "https://images.unsplash.com/photo-1574053129807-0fb8065719bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=679&q=80",
        user_id: 2
      })
      .expect(201);
  });
});
