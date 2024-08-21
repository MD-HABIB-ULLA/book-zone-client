import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve theme preference from localStorage or default to 'system'
    return localStorage.getItem("themes") || "system";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("themes", theme);
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  return (
    <button className="duration-500 text-3xl bg-white border-2 border-[#7224b2]  text-[#7224b2]   rounded-full p-1" onClick={toggleTheme}>
      {theme === "dark" ? <IoIosSunny /> : <IoMoon />}
    </button>
  );
};

export default ThemeBtn;
