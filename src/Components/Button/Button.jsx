const Button = ({ text }) => {
  return (
    <div>
      <button
        type="submit"
        className=" text-white font-bold border-none btn bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
