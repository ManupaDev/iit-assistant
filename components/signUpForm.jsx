import { useState } from "react";
import { SignUpUser } from "../utils/auth";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    tutGroup: "",
    password: "",
    confirmPassword: "",
  });

  const onFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSignUp = () => {
    if (formData.password === formData.confirmPassword && formData.email !== "" && formData.password !== "") {
      SignUpUser(formData.email, formData.password);
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="mt-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="IIT Email"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          placeholder="Student ID"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        <input
          type="text"
          name="tutGroup"
          value={formData.tutGroup}
          placeholder="Tutorial Group"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          className="border border-black rounded-lg mt-4 p-4 w-full text-2xl"
          onChange={onFormDataChange}
        />
      </div>
      <h1
        className="border border-black mt-4 text-2xl p-2 rounded-lg text-center font-semibold cursor-pointer"
        onClick={onSignUp}
      >
        Sign Up
      </h1>
    </div>
  );
}

export default SignUpForm;
