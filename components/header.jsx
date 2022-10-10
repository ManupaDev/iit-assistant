function Header() {
  return (
    <div className="p-4 border-2 border-black rounded-2xl grid grid-cols-2">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <div></div>
          <h2 className="w-6 h-6 text-center text-base border border-black">
            L5
          </h2>
          <h2 className="w-6 h-6 text-center text-base border border-black">
            P
          </h2>
        </div>
        <h1 className="text-2xl font-semibold">Hey, Manupa</h1>
      </div>

      <div className="flex flex-col items-end">
        <h1 className="text-4xl">15:31</h1>
        <h2 className="text-base">10th Monday 2022</h2>
      </div>
    </div>
  );
}

export default Header;
