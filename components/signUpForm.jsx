import { useState } from "react";
import { SignUpUser } from "../utils/auth";

function SignUpForm({ setError,error }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    studentId: "",
    tutGroup: "",
  });

  const onFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSignUp = () => {
    if (formData.tutGroup && formData.fname) {
      formData.tutGroup = formData.tutGroup.toUpperCase();
      const groupList = ['A','B', 'C', 'D', 'E', 'F',  'G', 'H', 'I' , 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S'];
      if (!groupList.includes(formData.tutGroup)) {
        setError({status:true, message:"Invalid Group"});
        return;
      }
      localStorage.setItem("user", JSON.stringify(formData));
      window.location = "https://iit-assistant.vercel.app/";
    } else {
      setError({ status: true, message: "A Required Field Is Missing." });
    }
  };

  return (
    <div className="mt-4">
      <div>
        <div className="flex flex-col items-end">
        <h1 className={`text-sm  text-red-600 ${error.status?'':'hidden'}`}>Required</h1>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          placeholder="First Name"
          className="border border-black rounded-lg  p-3 w-full text-2xl"
          onChange={onFormDataChange}
        />
        </div>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          placeholder="Last Name"
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
        <div className="flex flex-col items-end ">
        <h1 className={`text-sm  text-red-600 ${error.status?'':'hidden'}`}>Required</h1>
        <input
          type="text"
          name="tutGroup"
          value={formData.tutGroup}
          placeholder="Tutorial Group"
          className={`border border-black rounded-lg  ${error.status?'':'mt-4'} p-3 w-full text-2xl`}
          onChange={onFormDataChange}
        />
        </div>

        {/*<input
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
        />*/}
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
