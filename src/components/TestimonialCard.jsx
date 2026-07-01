import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

function TestimonialCard() {
  const customers = [
    {
      image: customer1,
      name: "Rahul Sharma",
      review: "Excellent quality plants and fast delivery!",
    },
    {
      image: customer2,
      name: "Priya Reddy",
      review: "Healthy plants and beautiful packaging.",
    },
    {
      image: customer3,
      name: "Anjali Verma",
      review: "Highly recommended. My home looks amazing now.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 px-10 py-10">
      {customers.map((customer, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
        >
          <img
            src={customer.image}
            alt={customer.name}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />

          <h3 className="mt-4 text-xl font-bold">{customer.name}</h3>

          <p className="text-yellow-500 text-lg">★★★★★</p>

          <p className="text-gray-600 mt-3">{customer.review}</p>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;