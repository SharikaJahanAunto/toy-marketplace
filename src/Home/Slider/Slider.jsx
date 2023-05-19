import './Slider.css';

const Slider = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10">
      <div className="carousel w-full md:w-1/2 h-1/2">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/OIP.9yaTQNTlw7S_fJb5gyrQ1AHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7" className="rounded-xl w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/OIP.JOBQyt12r56sNbp_2rF-ywHaEK?pid=ImgDet&rs=1" className="rounded-xl w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/OIP.UHwshwtT-5VK1yKljjwyUAHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7" className="rounded-xl w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/OIP.WHIlW4BxCwBy_hR64T0y-wHaEU?w=296&h=180&c=7&r=0&o=5&pid=1.7" className="rounded-xl w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        {/* Add other carousel items */}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-black text-4xl font-bold mb-4">Discover the Magic of Disney Toys</h2>
        <p className="text-black mb-4">Immerse yourself in a world of enchantment and joy with our wide collection of Disney toys. From beloved characters to iconic movie moments, our Disney toys bring the magic to life.</p>
        <button className="btn btn-primary mr-4 w-32">Shop Now</button>
      </div>
    </div>
  );
};

export default Slider;
