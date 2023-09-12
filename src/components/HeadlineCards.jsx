const HeadLine = () => {
  return (
    <div className="max-w-[1800px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out</p>
          <p className="px-2">throght 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Oredr Now
          </button>
        </div>
        <img
          src="Food/3.jpg"
          alt="None"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Test Item</p>
          <p className="px-2">Recently</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Oredr Now
          </button>
        </div>
        <img
          src="Food/5.jpg"
          alt="None"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Item</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Oredr Now
          </button>
        </div>
        <img
          src="Food/4.jpg"
          alt="None"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadLine;
