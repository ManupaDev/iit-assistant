function ModuleCard({ mode, venue, time }) {
  return (
    <div className="border-2 border-black p-4 mt-4 rounded-2xl">
      <h1 className="text-xl font-semibold">OOP Programming</h1>
      <div className="flex mt-4">
        <h2 className="border border-black w-fit px-2 py-1 text-base rounded-lg">
          {mode}
        </h2>
        <h2 className="border border-black w-fit px-2 py-1 text-base rounded-lg ml-2">
          {venue}
        </h2>
        <h2 className="border border-black w-fit px-2 py-1 text-base rounded-lg ml-2">
          {`${time.s} - ${time.e}`}
        </h2>
      </div>
    </div>
  );
}

export default ModuleCard;
