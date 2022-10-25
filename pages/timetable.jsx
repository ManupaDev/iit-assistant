import Header from "../components/header";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { getSlotsForToday, getTimetable } from "../utils/api";
import Link from "next/link";
import Switcher from "../components/switcher";
import Head from "next/head";


function Timetable() {
  const [timetable, setTimetable] = useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      window.location = "https://iit-assistant.vercel.app/signup";
    }
  }, []);

  useEffect(() => {
    if (user) {
      getTimetable(user.tutGroup).then((data) => {
        setTimetable(data);
      });
    }
  }, [user]);

  if (user && timetable) {
    return (
      <>
        <Head>
          <title>IITAssistant | Timetable</title>
        </Head>
        <div className="min-h-screen  flex flex-col justify-between">
          <div className="p-4">
            <Header user={user}/>
            <div className="mt-6">
              <h1 className="text-center font-bold text-4xl text-teal-600">TimeTable</h1>
              <Switcher timetable={timetable} />
            </div>

            <div
              className={`w-12 h-12 border border-black fixed bottom-4 right-4 rounded-full z-10 justify-center items-center ${
                open ? "hidden" : "flex"
              }`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <HiMenu size={24} />
            </div>
            <div
              className={`w-fit h-50 border bg-slate-100 border-black fixed bottom-4 right-4  p-2 z-10 rounded-2xl  flex-col justify-between ${
                open ? "flex" : "hidden"
              }`}
            >
              <div className="flex  flex-col items-end">
                <Link href="/">
                  <a className="text-xl  p-2 font-semibold">Today</a>
                </Link>
                <Link href="/timetable">
                  <a className="text-xl p-2 font-semibold">TimeTable</a>
                </Link>
                {/* <Link href="/materials">
                  <a className="text-xl p-2">Materials</a>
                </Link>
                <Link href="/materials">
                  <a className="text-xl p-2">Profile</a>
                </Link> */}
              </div>
              <div className="flex justify-end p-2">
                <MdClose
                  size={24}
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-center p-4">
            Made With 💖 By <span className="font-semibold">ManupaDev</span>
          </h1>
        </div>
      </>
    );
  } else {
    <Head>
      <title>IITAssistant | Timetable</title>
    </Head>;
  }
}

export default Timetable;
