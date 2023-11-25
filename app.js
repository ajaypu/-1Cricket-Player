const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const detailRouter = require("./routes/detail");
const bodyParser = require("body-parser");

// Use body-parser middleware to parse form data
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

//DB Connection
main().catch((err) => console.log(err));
//username=ajayworld
//password=XxmMpKfZGdYTIrwI (admin)
//db username=ajayworld
//db password=AAyJqjYwHszHXsUv
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/cricketDB");
  // "mongodb+srv://ajayworld:XxmMpKfZGdYTIrwI@companyrating1.ijuxpo4.mongodb.net/cricketDB"

  console.log("Database Connected Sucessfully");
}

app.use("/addDetail", detailRouter.router);
app.use("/getDetail", detailRouter.router);
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// https://www.youtube.com/watch?v=XZF-XoKGErc
