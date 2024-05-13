

const UpcomingEvents = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center dark:text-white text-gray-800 mb-8">
          Upcoming Events/Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
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
              Meet the renowned author Jane Doe and learn about her latest work!
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
  );
};

export default UpcomingEvents;
