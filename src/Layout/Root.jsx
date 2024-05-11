import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div className="dark:bg-[#212121] bg-[#F6F9FC] duration-500">
             <Toaster position="top-center" reverseOrder={false} />
            <Navber/>
            <Outlet/>
            <Footer/>
          
        </div>
    );
};

export default Root;