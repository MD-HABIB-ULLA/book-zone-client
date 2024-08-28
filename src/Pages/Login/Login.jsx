import { TextField } from "@mui/material";

import Button from "../../Components/Button/Button";
import img from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleBtn from "../../Components/GoogleBtn/GoogleBtn";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {

    setLoading,
    signOutUser,
    signInUser,
  
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    console.log(data);
    signOutUser();
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Login sucsessful");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password. Please try again.");
          setLoading(false);
        }
      });
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  // const handleGithubButton = () => {
  //   signOutUser();
  //   singInUserByGithub()
  //     .then(() => {
  //       toast.success("Sign In successful!");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       console.log(error.code);
  //       if (
  //         error.code === "auth/account-exists-with-different-credential" ||
  //         error.code === "auth/email-already-in-use"
  //       ) {
  //         toast.error("This email alreay exist");
  //         // setLoading(false);
  //       }
  //       if (error.code === "auth/popup-closed-by-user") {
  //         toast.error("Sign-in process was not completed. Please try again.");
  //         // setLoading(false);
  //       }
  //     });
  // };

  return (
    <div className="  m-auto max-w-7xl md:px-10 px-5  py-5 p-2">
      <div className="flex   bg-gradient-to-bl rounded-tr-3xl rounded-bl-3xl from-[#9e24b2] to-[#4724b2] rounded-l-none flex-col md:flex-row ">
        <div className=" md:w-2/5  space-y-5">
          <div className="p-5  space-y-4">
            <p className="text-white  md:text-3xl text-2xl uppercase text-center font-bold">
              Log in{" "}
            </p>
            <p className="text-white  md:text-xl text-sm text-center ">
              To keep connected with us please login with your personal info.{" "}
            </p>
          </div>
          <div className="h-60 md:block hidden">
            {" "}
            <img src={img} className="h-full m-auto" alt="" />
          </div>
        </div>
        <div className=" md:w-3/5 p-[2px]">
          <div className=" h-full bg-white md:rounded-tr-3xl rounded-tr-none rounded-bl-3xl md:rounded-bl-none p-5 flex flex-col justify-evenly">
            <div>
              <div className="md:text-2xl text-xl text-center">
                <p>Login with Social Profile</p>
                <div className="flex justify-center items-center gap-10 mt-5 ">
                  {/* google button */}

                  <GoogleBtn />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="divider">Or use your email account</div>
              </div>
            </div>
            <div>
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className=" space-y-4"
              >
                <div>
                  <TextField
                    label="Enter Email"
                    {...register("email", { required: true })}
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                    className="w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div>
                  <div className="relative">
                    {" "}
                    <TextField
                      label="Enter Password"
                      {...register("password", { required: true })}
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      variant="standard"
                      className="w-full relative"
                    ></TextField>
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#322C2B]"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </div>
                <div className="flex justify-center">
                  <Button text="login" />
                </div>
              </form>

              <div className="text-center mt-5">
                <span>New to this site ?</span>{" "}
                <Link to="/register" className="text-info">
                  {" "}
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

