const express = require("express");
const myapp = express();
myapp.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});
myapp.use((req, res, next) => {
  let date = new Date();
  if (
    date.getDay() > 0 &&
    date.getDay() < 6 &&
    date.getHours() > 9 &&
    date.getHours() < 17
  ) {
    next();
  } else {
    return res.sendFile(__dirname + "/notfound.html");
  }
});
myapp.use(express.static("public"));

myapp.listen(5000, (err) =>
  err ? console.log(err) : console.log("is running")
);
