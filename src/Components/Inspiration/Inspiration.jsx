const Inspiration = () => {
  return (
    <div>
      <section className="py-10  sm:py-16 lg:py-24 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="https://familydestinationsguide.com/wp-content/uploads/2023/01/Best-Things-to-Do-in-Norwalk-CT-FTR-768x458.jpg"
                  alt=""
                />

                <img
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src="https://www.scholastic.com/content/dam/parents/FeatureImages/Articles/improve-reading-comprehension-4-3.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Gateway to Infinite{" "}
                <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
                  Knowledge
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-white">
                Gateway to Infinite Knowledge is a digital library that opens
                the door to endless learning opportunities. Explore a vast array
                of books, research materials, and educational resources designed
                to inspire and enlighten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
