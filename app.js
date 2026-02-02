const express = require("express");
const app = express();

const userRouter = require('./routes/userRouter')

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./tourHandlers.js"); 

// Middleware to parse JSON
app.use(express.json());
app.use('/users', userRouter)

// ROUTES
// GET /tours
app.get("/tours", getAllTours);

// POST /tours
app.post("/tours", createTour);

// GET /tours/:tourId
app.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/tours/:tourId", deleteTour);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} at ${new Date().toString()}`);
});