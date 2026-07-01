import oxygen from "../assets/oxygen.jpg";

function O2Plants() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-green-700">
            O₂ Plants
          </h2>

          <p className="mt-4 text-gray-600">
            Improve your home's air quality with beautiful indoor plants.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={oxygen}
            alt="Oxygen Plant"
            className="w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default O2Plants;