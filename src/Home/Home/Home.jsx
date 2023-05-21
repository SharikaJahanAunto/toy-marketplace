import FeaturedToys from "../FeaturedToys/FeaturedToys";
import Testimonials from "../Testimonials/Testimonials";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Slider from "../Slider/Slider";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <div className="py-8">
      <Slider></Slider>
      <div className="mt-8">
        <Gallery></Gallery>
      </div>
      <div className="mt-8">
        <ShopByCategory></ShopByCategory>
      </div>
      <div className="mt-8">
        <FeaturedToys></FeaturedToys>
      </div>
      <div className="mt-8">
        <Testimonials></Testimonials>
      </div>

    </div>
  );
};

export default Home;