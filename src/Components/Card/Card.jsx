const Card = ({height, image, Category}) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`bg-cover  bg-center relative  ${height} w-full overflow-hidden rounded-3xl cursor-pointer text-2xl font-bold `}
      >
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[170%] -top-32 -left-16 w-32 h-44 rounded-full peer-hover:bg-[#8424B2] transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full peer-hover:bg-[#8424B2] transition-all duration-500 uppercase text-white">
          browse   books
        </div>
        <div className="w-full bg-black/20 h-full items-center justify-center flex uppercase text-white">
          {Category}
        </div>
      </div>
    </div>
  );
};

export default Card;
