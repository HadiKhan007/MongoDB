const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const database = "ecomm";
const database2 = "youTube";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");

}


const main = async () => {
  console.warn("Main Function");
  let data = await dbConnect();
  data = await data.find({name:"iphone 13"}).toArray();
  console.warn(data);
};
main();
