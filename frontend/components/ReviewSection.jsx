import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewSection = () => {
  return (
    <section id="review" className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue">
        Customer Reviews
      </h3>
      <h1 className="text-center text-3xl text-sunset uppercase mb-8">
        What Our Guests Say
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white p-6 rounded shadow relative">
            <i className="fas fa-quote-right text-4xl text-gray-300 absolute top-4 right-4"></i>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/images/pic-1.png"
                alt="Willis Mack"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-sunset font-bold">Willis Mack</h3>
                <div className="flex space-x-1">
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
                </div>
              </div>
            </div>
            <p className="text-lightColor">
              The food was incredible, and the atmosphere was warm and
              welcoming. I loved every bite!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded shadow relative">
            <i className="fas fa-quote-right text-4xl text-gray-300 absolute top-4 right-4"></i>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/images/pic-2.png"
                alt="Jane Kim"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-sunset font-bold">Jane Kim</h3>
                <div className="flex space-x-1">
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                </div>
              </div>
            </div>
            <p className="text-lightColor">
              A hidden gem! The flavors were on point, and the staff made sure
              we had an amazing time.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded shadow relative">
            <i className="fas fa-quote-right text-4xl text-gray-300 absolute top-4 right-4"></i>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/images/pic-3.png"
                alt="Ronald Doe"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-sunset font-bold">Ronald Doe</h3>
                <div className="flex space-x-1">
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star text-jellyBeanBlue"></i>
                  <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
                </div>
              </div>
            </div>
            <p className="text-lightColor">
              A must-visit restaurant! The quality of the food and service truly
              exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewSection;
