import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel;
