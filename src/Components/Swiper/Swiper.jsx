import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const SwiperBanner = () => {
  const customHeight = "calc(100vh - 6rem)";
  return (
    <div>
      <div style={{ height: customHeight }} className="  h-full ">
        {" "}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          className=" h-full w-full"
        >
          <SwiperSlide className=" w-full">
            <div className="h-full w-full">
              <div
                className="  bg-[length:400px_200px] hero bg-bottom w-full justify-start items-start md:items-center   h-full md:bg-contain bg-no-repeat md:bg-right"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/98jnhLp/enhanced-166-removebg-preview.png)",
                }}
              >
                <div className="md:ml-10  hero-content text-left duration-500  dark:text-white text-black ">
                  <div className="">
                    <h1 className="dark:text-white  duration-500 text-black mb-5 md:text-5xl text-3xl font-bold w-full">
                      The Bookworm's Haven <br /> Where Dreams Take Flight
                    </h1>

                    <p className="mb-5 md:w-1/2">
                      Step into the sanctuary of literature, where every page
                      holds the promise of adventure, enlightenment, and escape.
                      In the cozy embrace of a good book, imaginations soar and
                      hearts are stirred. Discover worlds within words, where
                      characters leap off the page and stories come to life.
                    </p>
                    <Link className="" to="/allbooks">
                      <Button text="Borrow a book" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" w-full">
            <div className="h-full w-full">
              <div
                className=" bg-[length:400px_200px] md:bg-contain hero  w-full justify-start    h-full items-start md:items-center bg-no-repeat md:bg-right bg-bottom"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/Br6V0Sc/book-white-background-isolated-books-157947-1799-removebg-preview.png)",
                    // backgroundSize: "200px 100px"
                }}
              >
                <div className="md:ml-10 ml-5 hero-content text-left duration-500 dark:text-white text-black">
                  <div className="">
                    <h1 className="dark:text-white text-black   duration-500 mb-5 md:text-5xl text-3xl font-bold w-full">
                      Unlocking Worlds <br /> The Power of Reading Books
                    </h1>

                    <p className="mb-5 md:w-1/2">
                      Dive into the magical realms of imagination and knowledge
                      with the simple act of reading. From transporting to
                      far-off lands to delving deep into the minds of great
                      thinkers, reading books opens up endless possibilities.
                    </p>
                    <Link className="" to="/allbooks">
                      <Button text="Borrow a book" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className=" w-full">
            <div className="h-full w-full">
              <div
                className=" hero w-full bg-cover justify-start bg-gray-500 h-full"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/v38X1bV/jute-5973747-1280.jpg)",
                }}
              >
                <div className="hero-overlay  bg-transparent bg-gradient-to-r from-[#1a0303f6]"></div>
                <div className="md:ml-10 ml-5 hero-content text-left text-neutral-content ">
                  <div className="">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold w-full h-full ">
                      The Promise of Renewable Resources <br /> in Jute & Wooden
                      Crafts
                    </h1>

                    <p className="mb-5 md:w-1/2">
                      Jute and wood are renewable resources that can be
                      harvested sustainably. This means that they can be
                      replenished naturally over time, reducing the strain on
                      natural ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide className=" w-full h-full">
            <div className="h-full w-full">
              <div
                className=" hero  w-full bg-cover justify-start bg-gray-500 h-full"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/pnc4w6y/wood-logs-stacked-1033323868-389e301792e049ef8d83caec6765bb5e.webp)",
                }}
              >
                <div className="hero-overlay  bg-transparent bg-gradient-to-r from-[#1a0303f6]"></div>
                <div className="md:ml-10 ml-5 hero-content text-left text-neutral-content ">
                  <div className="">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold w-full h-full ">
                      The Enduring Durability of <br /> Jute & Wooden Crafts
                    </h1>

                    <p className="mb-5 md:w-1/2">
                      Jute and wood are known for their durability and strength.
                      Crafts made from these materials are long-lasting and
                      resistant to wear and tear, making them practical and
                      sustainable choices for everyday use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperBanner;
