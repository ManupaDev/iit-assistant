import ModuleCard from "./moduleCard";

function ModuleCards({ slots }) {
  console.log(slots);

  if (slots) {
    if (slots.length === 0) {
      return (<div className="flex flex-col">
        <div className="border-2 border-black p-4 mt-4 rounded-2xl flex justify-center">
          <h1>Enjoy Your Weekend.✨</h1>
        </div>
      </div>);
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
