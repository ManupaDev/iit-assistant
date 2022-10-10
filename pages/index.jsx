import Header from "../components/header";
import ModuleCard from "../components/moduleCard";

function Home() {
  return (
    <div className="min-h-screen border border-red-500 p-4">
      <Header />
      <div className="mt-6">
        <h1 className="text-center text-4xl">Today</h1>
        <div className=" flex flex-col ">
          <ModuleCard
            mode="LEC"
            venue="4LA"
            time={{ s: "08:30", e: "10:30" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
