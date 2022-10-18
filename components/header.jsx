import { useEffect, useState } from "react";

function Header({ user }) {
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date(Date.now());
      setDate(now);
    }, 1000*60);
  }, []);

  return (
    <div className="p-4 border-2 border-black rounded-2xl grid grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <h2 className="w-6 h-6 text-center text-base border border-black">
            L5
          </h2>
          <h2 className="w-6 h-6 text-center text-base border border-black">
            {user.tutGroup}
          </h2>
        </div>
        <h1 className="text-2xl font-semibold">Hey, {user.fname}</h1>
      </div>

      <div className="flex flex-col items-end">
        <h1 className="text-4xl">{date.toTimeString().slice(0,5)}</h1>
        <h2 className="text-lg font-semibold">{date.toDateString()}</h2>
      </div>
    </div>
  );
}

export default Header;
