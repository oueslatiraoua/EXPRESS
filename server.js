const express = require("express");
const myapp = express();
console.log(myapp);
myapp.use(express.static("public"));
function currenttime() {
  return new Date().toString();
}

myapp.get(
  "/now",
  (req, res, next) => {
    req.time = currenttime();
    next();
  },
  (req, res) => res.json({ time: req.time })
);

myapp.listen(5000, (err) =>
  err ? console.log(err) : console.log("is running")
);
