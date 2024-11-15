// require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./.env" });
import { app } from "./app.js";

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log(error);
//     throw err;
//   }
// })();
