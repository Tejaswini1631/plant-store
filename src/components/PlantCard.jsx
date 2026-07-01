import plant1 from "../assets/plant1.jpg";


function PlantCard({ image, name, price }) {
  return (
    <div className="max-w-sm rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>

        <p className="text-gray-600 mt-2">
          Beautiful indoor decorative plant.
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-green-700 font-bold text-xl">{price}</span>

          <button
  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition"
>
  Buy Now
</button>
        </div>
      </div>
    </div>
  );
}



export default PlantCard;