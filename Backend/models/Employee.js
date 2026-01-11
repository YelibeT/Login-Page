// models/Employee.js
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  salary: Number
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

export default EmployeeModel; 
