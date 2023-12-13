import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movies.routes.js";

dotenv.config();

const port = 5000;
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/", movieRoutes);

app.listen(port, () => {
  console.info(`server running on port ${port}`);
});
