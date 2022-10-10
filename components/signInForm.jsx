import { useState } from "react";
import { SignInUser } from "../utils/auth";

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const onSignIn = () => {
    if (formData.email !== "" && formData.password !== "") {
      SignInUser(formData.email, formData.password);
    }
    
  };

  return (
    <div className="mt-4">
      <div>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="IIT Email"
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
      </div>
      <h1
        className="border border-black mt-4 text-2xl p-2 rounded-lg text-center font-semibold cursor-pointer"
        onClick={onSignIn}
      >
        Sign In
      </h1>
    </div>
  );
}

export default SignInForm;
