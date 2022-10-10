function SignUpForm() {
  return (
    <div className="mt-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
        />
        <input
          type="text"
          placeholder="IIT Email"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
        />
        <input
          type="text"
          placeholder="Student ID"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
        />
        <input
          type="text"
          placeholder="Tutorial Group"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black rounded-lg mt-4 p-3 w-full text-2xl"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-black rounded-lg mt-4 p-4 w-full text-2xl"
        />
      </div>
      <h1 className="border border-black mt-4 text-2xl p-2 rounded-lg text-center font-semibold">
        Sign Up
      </h1>
    </div>
  );
}

export default SignUpForm;
