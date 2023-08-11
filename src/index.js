import express from "express";
import { config } from "dotenv"
import initNhanVien from "./apis/nhanvien";
const app = express();
//Config .env file
config();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initNhanVien(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})