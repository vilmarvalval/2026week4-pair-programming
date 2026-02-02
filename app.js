const express = require("express");
const app = express();

const userRouter = require("./api/routes/userRouter");
const tourRouter = require("./api/routes/tourRouter");

app.use(express.json());
app.use("/users", userRouter);
app.use("/tours", tourRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} at ${new Date().toString()}`);
});
