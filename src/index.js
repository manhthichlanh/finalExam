import express from "express";
import { config } from "dotenv"
import { connectDB, sequelize } from "./models";
import cors from "cors";
import initNhanVien from "./apis/nhanvien";
import initUser from "./apis/user";

const app = express();

//Config .env file
config();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

initNhanVien(app);

initUser(app);

app.listen(port, async () => {
    console.log("🚀Server started Successfully! Running in port "+port);
    await connectDB();
    sequelize.sync({ force: false }).then(() => {
      console.log("✅Synced database successfully...");
    });
  });