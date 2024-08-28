import { useContext } from "react";
import google from "/google.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const { signOutUser, singInUserByGoogle , setLoading} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleButton = () => {
    signOutUser();
    singInUserByGoogle()
      .then(() => {
        toast.success("Signin successful ");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        }
        if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in process was not completed. Please try again.");
          setLoading(false);
        }
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleButton}
        className="bg-gray-200 p-3 rounded-full"
      >
        <img src={google} className="h-5 w-5" alt="" />
      </button>
    </div>
  );
};

export default GoogleBtn;
