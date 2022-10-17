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
        <div className=" border border-black rounded-lg grid-cols-5 grid">
          <h1
            onClick={()=>{
                setSlotsForDay("monday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "monday"
                ? "border border-black rounded-lg"
                : ""
            }`}
          >
            Mon
          </h1>
          <h1
            onClick={()=>{
                setSlotsForDay("tuesday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "tuesday"
                ? "border border-black rounded-lg"
                : ""
            }`}
          >
            Tue
          </h1>
          <h1
            onClick={()=>{
                setSlotsForDay("wednsday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "wednsday"
                ? "border border-black rounded-lg"
                : ""
            }`}
          >
            Wed
          </h1>
          <h1
            onClick={()=>{
                setSlotsForDay("thursday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "thursday"
                ? "border border-black rounded-lg"
                : ""
            }`}
          >
            Thu
          </h1>
          <h1
            onClick={()=>{
                setSlotsForDay("friday");
            }}
            className={`text-2xl font-semibold px-2 py-1  text-center ${
              day.selectedDay === "friday"
                ? "border border-black rounded-lg"
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
