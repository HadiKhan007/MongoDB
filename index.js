const dbConnect = require("./mongoDb");

const main = async () => {
  console.warn("Main Function");
  let data = await dbConnect();
  data = await data.find({ name: "Don" }).toArray();
  console.warn(data);
};
main();
