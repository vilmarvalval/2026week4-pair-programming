const express = require("express");
const app = express();

const userRouter = require('./routes/userRouter')

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourHandlers.js"); 
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("./controllers/userControllers.js");

app.use(express.json());
app.use('/users', userRouter)

app.get("/tours", getAllTours);

app.post("/tours", createTour);

app.get("/tours/:tourId", getTourById);

app.put("/tours/:tourId", updateTour);

app.delete("/tours/:tourId", deleteTour);

app.use('/users', userRouter)

app.get("/users", getAllUsers);

app.post("/users", createUser);

app.get("/users/:userId", getUserById);

app.put("/users/:userId", updateUser);

app.delete("/users/:userId", deleteUser);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} at ${new Date().toString()}`);
});