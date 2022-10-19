import { useEffect, useState } from "react";
import { getToday, getDayFromTimetable } from "../utils/api";
import ModuleCards from "./moduleCards";

function Switcher({ timetable }) {
  console.log(timetable);
  const [day, setDay] = useState(null);

  useEffect(() => {
    setDay(getDayFromTimetable(timetable, getToday()));
  }, []);

  const setSlotsForDay = (givenDay) => {
    setDay(getDayFromTimetable(timetable, givenDay));
  };

  if (day) {
    return (
      <div className=" mt-4  flex flex-col ">
        <div className=" border bg-slate-200 rounded-lg grid-cols-5 grid">
          <h1
            onClick={() => {
              setSlotsForDay("monday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "monday"
                ? "border  rounded-lg bg-teal-600 text-white"
                : ""
            }`}
          >
            Mon
          </h1>
          <h1
            onClick={() => {
              setSlotsForDay("tuesday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "tuesday"
                ? "border  rounded-lg bg-teal-600 text-white"
                : ""
            }`}
          >
            Tue
          </h1>
          <h1
            onClick={() => {
              setSlotsForDay("wednsday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "wednsday"
                ? "border  rounded-lg bg-teal-600 text-white"
                : ""
            }`}
          >
            Wed
          </h1>
          <h1
            onClick={() => {
              setSlotsForDay("thursday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "thursday"
                ? "border  rounded-lg bg-teal-600 text-white"
                : ""
            }`}
          >
            Thu
          </h1>
          <h1
            onClick={() => {
              setSlotsForDay("friday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "friday"
                ? "border  rounded-lg bg-teal-600 text-white"
                : ""
            }`}
          >
            Fri
          </h1>
        </div>

        <ModuleCards slots={day.slots} />
      </div>
    );
  }
}

export default Switcher;
