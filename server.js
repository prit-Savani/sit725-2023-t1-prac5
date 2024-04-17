var express = require("express");
var app = express();
require("./dbconnection");
var port = process.env.port || 3042;
let routes = require("./routers/router");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});
