import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Feature = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5  my-16 ">
     <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="  md:text-5xl capitalize  text-center text-3xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10  py-5 mb-10"
      >
        Our best{" "}
        <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
        Features
        </span>
      </div>
      <div
        className="grid md:grid-cols-3 grid-cols-1 max-w-7xl m-auto md:px-10 px-5 gap5 dark:text-white
      "
      >
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          className="text-center space-y-4 flex justify-center flex-col items-center p-5"
        >
          <img
            src="https://i.ibb.co/fY3LnzW/Group-3-removebg-preview.png"
            alt=""
            className="h-20 w-20"
          />
          <div className="space-y-2 text-center dark:text-white">
            <h1 className=" text-xl font-semibold">Search book</h1>
            <p className="text-sm dark:text-white text-gray-600 md:w-4/5 m-auto">
              Effortlessly find your next read with our powerful and intuitive
              book search.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          className="text-center space-y-4 flex justify-center flex-col items-center p-5"
        >
          <img
            src="https://i.ibb.co/qJ3GWZd/Group-4-removebg-preview.png"
            alt=""
            className="h-20 w-20"
          />
          <div className="space-y-2 text-center">
            <h1 className="dark:text-white text-xl font-semibold">Review book</h1>
            <p className="text-sm text-gray-600 dark:text-white md:w-4/5 m-auto">
              Discover insightful critiques and share your thoughts on diverse
              literary masterpieces effortlessly.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          className="text-center space-y-4 flex justify-center flex-col items-center p-5"
        >
          <img
            src="https://i.ibb.co/h1W2QS2/Group-5-removebg-preview.png"
            alt=""
            className="h-20 w-20"
          />
          <div className="space-y-2 text-center">
            <h1 className="dark:text-white text-xl font-semibold">Wishlist book</h1>
            <p className="text-sm text-gray-600 dark:text-white md:w-4/5 m-auto">
              Curate your literary dreams–wishlist books for future adventures
              and discoveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

