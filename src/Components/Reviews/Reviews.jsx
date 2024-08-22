
import quote from "/quote.svg"
const Reviews = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5  my-16 ">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="  md:text-5xl capitalize  text-center text-3xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10  py-5 mb-10"
      >
        <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
          Reviews
        </span>{" "}
        of Others
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        <div className="space-y-4 border-[1.5px] p-3 border-[#7224b2] rounded-lg">
          <div className="flex justify-between items-center bg-[#7224b2]/5  p-3 rounded-md">
            <div className="flex  gap-3">
              <img
                src="https://i.ibb.co/Fnt5zdk/c3ac7682e52df2e10d0a36ec3f243a44.jpg"
                alt=""
                className="object-cover h-10 w-10 rounded-full"
              />
              <div className="">
                <h1 className="text-[#7224b2] uppercase font-bold">
                  miss joti
                </h1>
                <p className="dark:text-white text-xs"> Beauty queen</p>
              </div>
            </div>
            <img src={quote} className="h-7" alt="" />
          </div>
          <p className="dark:text-white text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            deleniti aliquam. Quisquam illum autem minus illo quasi nisi
            accusantium suscipit nobis rem porro ipsa voluptatum dolorum saepe,
            enim in voluptatem.
          </p>
        </div>
        <div className="space-y-4 border-[1.5px] p-3 border-[#7224b2] rounded-lg">
          <div className="flex justify-between items-center bg-[#7224b2]/5  p-3 rounded-md">
            <div className="flex  gap-3">
              <img
                src="https://i.ibb.co/8BF8V7m/15d7211204149d93adda6dfafb5d81f2.jpg"
                alt=""
                className="object-cover h-10 w-10 rounded-full"
              />
              <div className="">
                <h1 className="text-[#7224b2] uppercase font-bold">
                  lara paick
                </h1>
                <p className="dark:text-white text-xs"> director of school</p>
              </div>
            </div>
            <img src={quote} className="h-7" alt="" />
          </div>
          <p className="dark:text-white text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            deleniti aliquam. Quisquam illum autem minus illo quasi nisi
            accusantium suscipit nobis rem porro ipsa voluptatum dolorum saepe,
            enim in voluptatem.
          </p>
        </div>
        <div className="space-y-4 border-[1.5px] p-3 md:hidden lg:block block border-[#7224b2] rounded-lg">
          <div className="flex justify-between items-center bg-[#7224b2]/5  p-3 rounded-md">
            <div className="flex  gap-3">
              <img
                src="https://i.ibb.co/D4vCbYX/f42d73f4b2b7835b4c918c4edcf10f64.jpg"
                alt=""
                className="object-cover h-10 w-10 rounded-full"
              />
              <div className="">
                <h1 className="text-[#7224b2] uppercase font-bold">
                 jack mackkalam
                </h1>
                <p className="dark:text-white text-xs"> chief officer</p>
              </div>
            </div>
            <img src={quote} className="h-7" alt="" />
          </div>
          <p className="dark:text-white text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            deleniti aliquam. Quisquam illum autem minus illo quasi nisi
            accusantium suscipit nobis rem porro ipsa voluptatum dolorum saepe,
            enim in voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
