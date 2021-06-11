exports.AppRoutes = (app) => {
  app.use("/api/user", require("./UserRoutes"));

  //   /* ALL INVALID REQUESTS */
  //   app.all("*", (req, res) =>
  //     res.status(404).json({ message: "Route Not Found" })
  //   );
};
