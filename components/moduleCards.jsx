import ModuleCard from "./moduleCard";

function ModuleCards({ slots }) {
  console.log(slots);

  if (slots) {
    if (slots.length === 0) {
      return (
        <div className="border-2 bg-white border-bluegrey-500 p-6 mt-4 rounded-2xl flex justify-center items-center">
          <h1 className="text-xl  font-semibold text-bluegrey-700">Enjoy Your Weekend.✨</h1>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          {slots.map((slot, i) => {
            return (
              <ModuleCard
                key={i}
                name={slot.name}
                type={slot.type}
                venue={slot.venue}
                time={slot.time}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default ModuleCards;
