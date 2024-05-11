import img from "../../assets/errorpage.svg"
import img1 from "../../assets/errorbg.png"
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const ErrorPage = () => {
  return (
    <div>
      <div style={{backgroundImage: `url(${img1})`}} className="hero min-h-screen bg-right bg-contain bg-no-repeat bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-lg rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">Page Not Found</h1>
            <p className="py-6">
            Sorry, we couldn't find the requested page. Please double-check the URL or try again later. If the issue persists, feel free to contact us for assistance.
            </p>
            <Link className=" "><Button text={'Back To Home'}></Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
