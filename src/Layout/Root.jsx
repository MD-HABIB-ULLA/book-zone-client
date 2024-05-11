import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="dark:bg-[#212121] bg-gray-100 duration-500">
             <Toaster position="top-center" reverseOrder={false} />
            <Navber/>
            <Outlet/>
          
        </div>
    );
};

export default Root;