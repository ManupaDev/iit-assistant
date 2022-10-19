import { useEffect, useState } from "react";

function Header({ user }) {
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date(Date.now());
      setDate(now);
    }, 1000 * 60);
  }, []);

  return (
    <div className="p-4 border-2 border-bluegrey-500 bg-slate-100 rounded-2xl grid grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <h2 className="w-7 h-7 text-center text-base flex justify-center items-center rounded-md border bg-bluegrey-500  text-white  font-semibold">
            L5
          </h2>
          <h2 className="w-7 h-7 text-center ml-2 rounded-md text-base border flex justify-center items-center bg-bluegrey-500  text-white font-semibold">
            {user.tutGroup}
          </h2>
        </div>
        <h1 className="text-2xl font-semibold text-bluegrey-700">
          Hey, {user.fname}
        </h1>
      </div>

      <div className="flex flex-col items-end">
        <h1 className="text-4xl font-semibold text-bluegrey-700">
          {date.toTimeString().slice(0, 5)}
        </h1>
        <h2 className="text-lg font-medium text-bluegrey-700">
          {date.toDateString()}
        </h2>
      </div>
    </div>
  );
}

export default Header;
