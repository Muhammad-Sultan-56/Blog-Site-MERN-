const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const cors = require("cors");
// ========= Routes
const categoryRoute = require("./routes/CategoryRoutes");
const postRouter = require("./routes/PostRoutes");
const userRoute = require("./routes/UserRoute");

// ====== middlewares
app.use(express.json());

// serve static files like images/uploads folder
app.use(express.static("uploads"));

// cors request

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE']
  })
);

app.use("/category", categoryRoute);

app.use("/post", postRouter);

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World...!");
});

// Connect to Database
mongoose
  .connect("mongodb://127.0.0.1:27017/blog")
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected & app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Database connection failed due to ${err}`);
  });
