import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import O2Plants from "./components/O2Plants";
import Footer from "./components/Footer";
import plant1 from "./assets/plant1.jpg";
import plant2 from "./assets/plant2.jpg";
import plant3 from "./assets/plant3.jpg";
import plant4 from "./assets/plant4.jpg";
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectionTitle title="Trending Plants" />

     <div className="grid md:grid-cols-3 gap-8 px-10">
  <PlantCard image={plant1} name="Monstera Plant" price="₹799" />
  <PlantCard image={plant2} name="Snake Plant" price="₹699" />
  <PlantCard image={plant3} name="Peace Lily" price="₹899" />
</div>

      <SectionTitle title="Top Selling Plants" />

     <div className="grid md:grid-cols-4 gap-8 px-10">
  <PlantCard image={plant1} name="Monstera Plant" price="₹799" />
  <PlantCard image={plant2} name="Snake Plant" price="₹699" />
  <PlantCard image={plant3} name="Peace Lily" price="₹899" />
  <PlantCard image={plant4} name="Aloe Vera" price="₹499" />
</div>

      <SectionTitle title="Customer Reviews" />

      <TestimonialCard />

      <O2Plants />

      <Footer />
    </>
  );
}

export default App;