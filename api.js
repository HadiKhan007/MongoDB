const express = require("express");
const dbConnect = require("./mongoDb");
const mongoDB = require("mongodb");

const app = express();
// ======GET API======
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send({ data });
});

//  ======POST API======
app.use(express.json());

app.post("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  resp.send(data);
});

//  ======PUT API======

app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  data = await data.updateOne({ name: req.params.name }, { $set: req.body });
  resp.send({ result: "Update" });
});

//  ======`DELETE` API======

app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongoDB.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(50);
