const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getcars,
  createcar,
  getcar,
  deletecar,
  patchcar,
  putcar,
} = require("./controllers/myControllers.js");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// GET a single car
app.get("/api/car/:id", getcar);
// DELETE a car
app.delete("/api/car/:id", deletecar);
// Update car using PATCH
app.patch("/api/car/:id", patchcar);
// Update car using PUT
app.put("/api/car/:id", putcar);
// Add a new car
app.post("/api/cars", createcar);
// GET all cars
app.get("/api/cars", getcars);



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
