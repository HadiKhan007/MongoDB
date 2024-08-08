const dbConnect = require("./mongoDb");

const updateData = async () => {
  const db = await dbConnect();
  console.log("====UpdateData====");
  const result = await db.updateMany(
    { name: "Doooon" },
    { $set: { name: "Doooon", type: "Fight" } }
  );
  if (result.acknowledged) {
    console.log(result.acknowledged);
  }
};

updateData();
