import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewSection = () => {
  return (
    <section id="review" className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue">
        Kundenbewertungen
      </h3>
      <h1 className="text-center text-3xl text-sunset uppercase mb-8">
        Das sagen unsere Gäste
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
                src="/images/pic-2.png"
                alt="Willis Mack"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl text-sunset font-bold">Gabi Shär</h3>
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
              Sehr, sehr freundliche Bedienung, Essen ausgezeichnet, es wurde alles frisch zubereitet. Wir kommen gerne wieder.
Auch beim zweiten mal überzeugte die Küche. Wenn es nicht soweit entfernt von uns wäre, wären wir wohl gerne noch öfter dort zum Essen :)
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
                <h3 className="text-xl text-sunset font-bold">Kevin Patrick Zollinger</h3>
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
              Bester Imbiss in der Region! Immer empfehlenswert und super Qualität!
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
                <h3 className="text-xl text-sunset font-bold">Nadya Wolflisberg</h3>
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
              Sehr zuvorkommend. Trotz grösserer Bestellung für eine Gesellschaft, pünktliche und richtige Lieferung. Preise passen. Essen frisch und gut. Empfehlenswert.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewSection;
