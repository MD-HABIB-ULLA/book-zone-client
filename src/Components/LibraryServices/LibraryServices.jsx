const LibraryServices = () => {
  return (
    <section className="py-12 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto my-auto px-4">
        <h2 className="text-5xl font-semibold text-center dark:text-white text-gray-800 mb-40">
          Library Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 md:px-0">
          {/* Service 1: Borrowing Books */}
          <div className="bg-white shadow-2xl shadow-[#5c1d8e]  rounded-lg p-6 border-b-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Borrowing Books
            </h3>
            <p className="text-gray-600">
              Explore our extensive collection of books and borrow your
              favorites for free!
            </p>
          </div>

          {/* Service 2: Accessing Digital Resources */}
          <div className="bg-white shadow-2xl shadow-[#5c1d8e] rounded-lg p-6 border-b-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Accessing Digital Resources
            </h3>
            <p className="text-gray-600">
              Gain access to a wide range of digital resources including eBooks,
              audiobooks, and online databases.
            </p>
          </div>

          {/* Service 3: Attending Workshops */}
          <div className="bg-white shadow-2xl shadow-[#5c1d8e] rounded-lg p-6 border-b-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Attending Workshops
            </h3>
            <p className="text-gray-600">
              Participate in informative workshops and events on various topics
              such as literacy, technology, and more.
            </p>
          </div>

          {/* Service 4: Using Study Spaces */}
          <div className="bg-white shadow-2xl shadow-[#5c1d8e] rounded-lg p-6 border-b-8 border-[#5c1d8e] duration-500  transform transition-transform hover:scale-105">
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
    </section>
  );
};

export default LibraryServices;
