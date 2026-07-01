import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-green-700">
        Plant<span className="text-black">Shop</span>
      </h1>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-green-600">Home</li>
        <li className="cursor-pointer hover:text-green-600">Plants</li>
        <li className="cursor-pointer hover:text-green-600">About</li>
        <li className="cursor-pointer hover:text-green-600">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-5 text-xl">
        <FaSearch className="cursor-pointer hover:text-green-600" />
        <FaShoppingCart className="cursor-pointer hover:text-green-600" />
        <FaUser className="cursor-pointer hover:text-green-600" />
      </div>
    </nav>
  );
}

export default Navbar;