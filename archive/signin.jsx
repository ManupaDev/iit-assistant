import SignInForm from "../components/signInForm";

function SignIn() {
  return (
    <div className="min-h-screen border border-red-500">
      <div className="px-4 mt-24">
        <div>
          <h1 className="font-semibold text-3xl text-center">
            Welcome To IIT Assistant
          </h1>
          <h2 className="font-light text-base mt-4 text-center">
            Sign In To Continue
          </h2>
        </div>

        <SignInForm />
      </div>
      <div className=" fixed bottom-0 w-full p-4 ">
        <h1 className="text-base text-center">New to IIT Assistant?</h1>
        <h1 className="border border-black mt-4 text-2xl p-2 rounded-lg text-center font-semibold" onClick={() => {
          window.location = "https://iit-assistant.vercel.app/signup";
        }}>
          Sign Up
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
