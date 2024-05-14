const UpcomingEvents = () => {
  return (
    <section className="min-h-screen my-10 mb-20">
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/VTgzQnZ/stacks-of-hardback-books.jpg)",
        }}
        className=" bg-center bg-no-repeat bg-cover"
      >
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
            Share Your Ideas
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Drop your own ideas or questions for improve the libary . Share them with us!
          </p>
          <div className="flex flex-row w-full gap-3 justify-center">
            <input
              type="text"
              placeholder="Enter your idea or question"
              className="border border-gray-300 px-4 py-2 rounded-lg w-3/4"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <section className="w-5/6 mx-auto mb-12 -mt-20  rounded-lg shadow-md lg:-mt-40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className=" md:text-5xl text-2xl text-center bg-[#24232365] text-white  mb-8 font-bold">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold  mb-2">
                Book Club Meeting
              </h3>
              <p className="text-gray-600 mb-4">Date: September 15, 2024</p>
              <p className="text-gray-600 mb-4">Time: 4:00 PM - 6:00 PM</p>
              <p className="text-gray-600">
                Join us for an engaging discussion on our latest book selection!
              </p>
            </div>

            {/* Event 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Author Talk: Jane Doe
              </h3>
              <p className="text-gray-600 mb-4">Date: September 20, 2024</p>
              <p className="text-gray-600 mb-4">Time: 2:00 PM - 4:00 PM</p>
              <p className="text-gray-600">
                Meet the renowned author Jane Doe and learn about her latest
                work!
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tech Workshop: Coding Basics
              </h3>
              <p className="text-gray-600 mb-4">Date: September 25, 2024</p>
              <p className="text-gray-600 mb-4">Time: 10:00 AM - 12:00 PM</p>
              <p className="text-gray-600">
                Learn the fundamentals of coding in this hands-on workshop!
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpcomingEvents;
