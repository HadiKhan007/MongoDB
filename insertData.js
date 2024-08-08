const dbConnect = require("./mongoDb");

const insertData = async () => {
  console.log("------Insert Data------");
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "Don1",
      type: "Action",
      release: "Aug 2024",
    },
    {
      name: "Don2",
      type: "Action",
      release: "Aug 2024",
    },
    {
      name: "Don3",
      type: "Action",
      release: "Aug 2024",
    },
  ]);
  if (result.acknowledged) {
    console.log(result?.acknowledged);
  }
};

insertData();
