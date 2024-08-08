const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "ecomm";
const database2 = "youTube";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database2);
  return db.collection("Movies");
}

module.exports = dbConnect;
