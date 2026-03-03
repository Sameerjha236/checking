import dotenv from "dotenv";
import app from "./app.js";
import { connectDb } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  await connectDb();

  const PORT = process.env.PORT || 5005;

  app.listen(PORT, () => {
    console.log("Server running on Port ", PORT);
  });
};

startServer();
