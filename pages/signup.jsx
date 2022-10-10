import SignUpForm from "../components/signUpForm";

function SignUp() {
  return (
    <div className="min-h-screen border border-red-500">
      <div className="px-4 mt-24">
        <div>
          <h1 className="font-semibold text-3xl text-center">
            Welcome To IIT Assistant
          </h1>
          <h2 className="font-light text-base mt-4 text-center">
            Join to make your life easier
          </h2>
        </div>

        <SignUpForm />
      </div>
      
      <div className=" fixed bottom-0 w-full p-4 ">
        <h1 className="text-base text-center">Already have an account?</h1>
        <h1
          className="border border-black mt-4 text-2xl p-2 rounded-lg text-center font-semibold"
          onClick={() => {
            window.location = "http://localhost:3000/signin";
          }}
        >
          Sign In
        </h1>
      </div>
    </div>
  );
}

export default SignUp;
