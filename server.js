const express = require("express");
const session = require("express-session");
const PassportAuth = require("./config/passportConfig");
const connectDatabase = require("./config/db");
const cors = require("cors");
const passport = require("passport");
const port = 5000;
const app = express();
app.use(express.json());
connectDatabase();
PassportAuth();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(
  session({
    secret: "batman",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use("/getlists", require("./routes/getLists"));
app.use("/getitems", require("./routes/getItems"));
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server started successfully on port ${port}`);
});
