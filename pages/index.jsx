import Header from "../components/header";
import { VscHome } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { getSlotsForToday, getTimetable } from "../utils/api";
import ModuleCards from "../components/moduleCards";

function Home() {
  const [slots, setSlots] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      window.location = "http://localhost:3000/signup";
    }
  }, []);

  useEffect(() => {
    if (user) {
      getSlotsForToday(user.tutGroup).then((data) => {
        setSlots(data);
      });
    }
  }, [user]);

  if (user) {
    return (
      <div className="min-h-screen border border-red-500">
        <div className="p-4">
          <Header />
          <div className="mt-6">
            <h1 className="text-center text-4xl">Today</h1>
            <ModuleCards slots={slots} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
