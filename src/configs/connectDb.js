import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/finalExam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose
export default db;