import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="py-8">
        <Slider></Slider>
        <div className="mt-8">
          <Gallery></Gallery>
        </div>
        <div className="mt-8">
        <ShopByCategory></ShopByCategory>
        </div>
        
      </div>
    );
};

export default Home;