const dbConnect = require("./mongoDb");

const deleteData = async () => {
  console.log("====DeleteData====");
  const db = await dbConnect();
  const result = await db.deleteOne({
    name: "Don2",
  });
  if (result.acknowledged) {
    console.log(result.acknowledged);
  }
};

deleteData();
