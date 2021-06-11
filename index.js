const express = require("express");
const { connect, Error } = require("mongoose");
const { DB, PORT } = require("./Config");
const HandleError = require("./Middlewares/HandleError");
const { AppRoutes } = require("./Routes");

// init the app
const app = express();

app.use(express.json());

//routes
AppRoutes(app);

// handle error
app.use(HandleError);

const startApp = async () => {
  try {
    // connect with db
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Connected to database");

    // start server listening
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (e) {
    console.error("Database connectivity failed", error);
    startApp();
  }
};

// start the app
startApp();
