require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 8000;

server.use(PORT, () => {
  console.log(`\n=== Server is running on port ${PORT}. ===\n`);
});
