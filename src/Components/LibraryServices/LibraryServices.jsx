const LibraryServices = () => {
  return (
    <section className=" max-w-7xl m-auto md:px-10 px-5  ">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="  md:text-5xl capitalize text-center text-3xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10  py-5 mb-10"
      >
        Our{" "}
        <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
          Services
        </span>{" "}
        for you
      </div>
      <div className="w-full space-y-20">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-7 ">
          <div className="md:pr-10 h-72 flex justify-center items-center">
            <img
              src="https://i.ibb.co/mvbVjm7/Service.png"
              className="box-border rounded-lg h-full shadow-2xl object-cover w-full  "
              alt=""
            />
          </div>
          <div className="space-y-4 ">
            <h1 className="text-4xl dark:text-white md:text-left  text-center">
              <span className="text-[#7224b2]">Rent</span> your favorite book{" "}
              <br /> fairly easy on{" "}
              <span className="text-[#7224b2]">Book zone!</span>
            </h1>
            <p className="md:text-sm text-xs dark:text-white  text-gray-600">
              Viewing, rent, and organize your favorite books has never been
              easier. An integrated digital library rent that’s simple to use,
              Lidia lets you spend less time managing your work and more time
              actually doing it! <br />
              <br />
              Effortless rentals, personalized shelves—Lidia transforms book
              management, enhancing your reading experience~
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-7  ">
          <div className="md:pl-10  flex md:hidden md:justify-end justify-center h-72">
            <img
              src="https://i.ibb.co/fvwPJQ5/Right.png"
              className="box-border rounded-lg h-full w-full object-cover shadow-2xl  "
              alt=""
            />
          </div>
          <div className="space-y-4">
            <h1 className="md:text-4xl text-3xl md:text-left text-center dark:text-white">
              Quick Book Rentals: <br />
              <span className="text-[#7224b2]">Dive</span> into Reading{" "}
              <span className="text-[#7224b2]">Instantly</span>
            </h1>
            <p className="md:text-sm text-xs dark:text-white text-gray-600 md:text-left text-center">
              Discover instant literary delight. Access a vast library, borrow
              your favorite reads, and dive into captivating stories within
              minutes. Reading made quick and easy, just a click away! <br />{" "}
              <br /> Unlock a world of stories effortlessly. Browse genres,
              choose, rent in minutes. Seamlessly manage your reading adventures
              with our intuitive platform~
            </p>
          </div>
          <div className="md:pl-10  md:flex hidden md:justify-end justify-center h-72">
            <img
              src="https://i.ibb.co/fvwPJQ5/Right.png"
              className="box-border rounded-lg h-full shadow-2xl  "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryServices;
// https://i.ibb.co/mvbVjm7/Service.png
// https://i.ibb.co/fvwPJQ5/Right.png
