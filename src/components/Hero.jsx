import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-green-50">
      {/* Left Side */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Bring Nature <br /> Into Your Home
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Discover beautiful indoor plants that freshen your space and improve
          your lifestyle.
        </p>

        <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
          Shop Now
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={hero}
          alt="Hero Plant"
          className="w-[450px] rounded-xl"
        />
      </div>
    </section>
  );
}

export default Hero;