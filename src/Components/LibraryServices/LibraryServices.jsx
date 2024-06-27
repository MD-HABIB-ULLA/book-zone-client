const LibraryServices = () => {
  return (
    <section className="py-12 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto my-auto px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          className="  md:text-5xl text-center text-2xl pb-10 container m-auto dark:text-white text-black duration-500 font-bold md:py-10 py-5 "
        >
          Library Services
        </div>
        <div className="flex flex-col  gap-5 lg:px-20 px-5 md:px-0">
          <div className="flex md:flex-row flex-col justify-between  gap-5">
            {/* Service 1: Borrowing Books */}
            <div className="bg-white shadow-md h-36 shadow-[#5c1d8e]  rounded-lg p-6 border-l-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 lg:mb-4">
                Borrowing Books
              </h3>
              <p className="text-gray-600">
                Explore our extensive collection of books and borrow your
                favorites for free!
              </p>
            </div>

            {/* Service 2: Accessing Digital Resources */}
            <div className="h-36 bg-white shadow-md shadow-[#5c1d8e] rounded-lg p-6 border-r-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Accessing Digital Resources
              </h3>
              <p className="text-gray-600">
                Gain access to a wide range of digital resources including
                eBooks, audiobooks, and online databases.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between gap-5 ">
            {/* Service 3: Attending Workshops */}
            <div className="h-36 bg-white shadow-md shadow-[#5c1d8e] rounded-lg p-6 border-l-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Attending Workshops
              </h3>
              <p className="text-gray-600">
                Participate in informative workshops and events on various
                topics such as literacy, technology, and more.
              </p>
            </div>

            {/* Service 4: Using Study Spaces */}
            <div className= "h-36 bg-white shadow-md shadow-[#5c1d8e] rounded-lg p-6 border-r-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Using Study Spaces
              </h3>
              <p className="text-gray-600">
                Find a quiet space to study, work, or collaborate with others in
                our dedicated study areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryServices;
