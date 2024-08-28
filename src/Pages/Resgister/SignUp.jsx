import { useContext, useState } from "react";
import img from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TextField } from "@mui/material";
import Button from "../../Components/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleBtn from "../../Components/GoogleBtn/GoogleBtn";

const SignUp = () => {
  const {
    creatNewUser,
    // singInUserByGithub,
    setLoading,
    updateUserProfile,

  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    console.log(data);
    creatNewUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photoUrl);
        toast.success("Registration successful!");
        console.log(result.user);
        console.log("register sucssesful", result.user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
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
      });
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


  const validatePassword = (value) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!specialCharacterRegex.test(value)) {
      return "Password must contain at least one special Characte";
    }
    if (!lengthRegex.test(value)) {
      return "Password must be at least 6 characters long";
    }
  };
  return (
    <div className="  m-auto max-w-7xl md:px-10 px-5 py-5 ">
      <div className="flex md:flex-row-reverse flex-col  bg-gradient-to-br rounded-tr-3xl rounded-bl-3xl from-[#9e24b2] to-[#4724b2] rounded-l-none">
        <div className=" md:w-2/5 space-y-5 flex flex-col justify-between">
          <div className="p-5  space-y-4">
            <p className="text-white  md:text-3xl text-xl font-bold text-center ">Register </p>
            <p className="text-white  md:text-xl text-sm text-center">
              Enter your personal details and start journey with us.{" "}
            </p>
          </div>
          <div className="h-60 md:block hidden">
            {" "}
            <img src={img} className="h-full m-auto " alt="" />
          </div>
        </div>
        <div className=" md:w-3/5 p-[2px]">
          <div className=" h-full bg-white rounded-bl-3xl p-5 flex flex-col justify-evenly">
            <div>
              <div className="text-2xl text-center">
                <p>Create an Account</p>
                <div className="flex justify-center items-center gap-10 mt-5 ">
                  {/* google button */}
               
                 <GoogleBtn/>

                 
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="divider">Or create with </div>
              </div>
            </div>
            <div>
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="md:px-10 space-y-4"
              >
                <div className="flex w-full  gap-3">
                  <div className="w-full">
                    <TextField
                      label="Enter Name"
                      {...register("name", { required: true })}
                      type="text"
                      autoComplete="current-password"
                      variant="standard"
                      className="w-full"
                    />
                    {errors.name && (
                      <span className="text-red-500">Name is required</span>
                    )}
                  </div>
                  <div className="w-full">
                    <TextField
                      label="Enter Photo URL"
                      {...register("photoUrl", { required: true })}
                      type="text"
                      autoComplete="current-password"
                      variant="standard"
                      className="w-full"
                    />
                    {errors.photoUrl && (
                      <span className="text-red-500">PhotoUrl is required</span>
                    )}
                  </div>
                </div>
                <div>
                  <TextField
                    label="Enter Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    autoComplete="current-password"
                    variant="standard"
                    className="w-full"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <div className="relative">
                    {" "}
                    <TextField
                      label="Enter Password"
                      {...register("password", {
                        required: " Password is required",
                        validate: validatePassword,
                      })}
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
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex justify-center">
                  <Button text="Create Account" />
                </div>
              </form>
              <div className="text-center mt-5">
                <span>Alredy have an account ?</span>{" "}
                <Link to="/login" className="text-info">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

