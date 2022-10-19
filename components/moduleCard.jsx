function ModuleCard({ name,type, venue, time }) {
  return (
    <div className="border-2 bg-white border-bluegrey-500 p-4 mt-4 rounded-2xl">
      <h1 className="text-xl  font-semibold text-bluegrey-700">{name}</h1>
      <div className="flex mt-4">
        <h2 className="border w-fit  px-2 py-1 text-white bg-teal-600 text-base font-medium rounded-lg">
          {type}
        </h2>
        <h2 className="border w-fit px-2 py-1 text-white bg-teal-600 text-base font-medium rounded-lg ml-2">
          {venue}
        </h2>
        <h2 className="border w-fit px-2 py-1 text-white bg-teal-600 text-base font-medium rounded-lg ml-2">
          {`${time.s} - ${time.e}`}
        </h2>
      </div>
    </div>
  );
}

export default ModuleCard;
