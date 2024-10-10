"use client";
import InputContainer from "@/components/input-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const toast = useToast();
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!userData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (validate()) {
      await axios
        .post("https://360.futamart.com/auth/login", userData)
        .then((response) => {
          console.log(response);
          toast({
            title: "Login successful!",
            description: "You have successfully logged in.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          // Redirect or perform further actions after success
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: "Login failed.",
            description: "Please check your credentials and try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      toast({
        title: "Validation Error.",
        description: "Please fill out all fields correctly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleRoute = () => {
    router.push("/signup");
  };

  return (
    <main className="mt-[150px] mb-10 lg:mt-[150px] flex flex-col items-center justify-center">
      <div className="border-2 w-[85%] lg:w-[30%] rounded-[8px] lg:p-[2%] py-[10%] px-[3%] flex flex-col gap-5 shadow-lg">
        <div>
          <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
            Login
          </h1>
          <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
            Please enter your account credentials below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputContainer
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            value={userData.email}
            onChange={handleChange}
            error={errors.email}
            icon={<MdMailOutline size={"20px"} />}
          />
          <InputContainer
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            value={userData.password}
            onChange={handleChange}
            error={errors.password}
            icon={<IoLockClosedOutline size={"20px"} />}
          />
          <div className="text-[#697488] text-[12px] flex justify-between items-center">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="bg-[#bf2180]" />
              <p>Remember me</p>
            </label>
            <Link href={"/"}>Reset password</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              isLoading={isLoading}
              className="bg-[#bf2180] px-3 h-[45px] rounded-[13px] hover:bg-[#bf2180] hover:text-white"
            >
              {isLoading ? <ClipLoader color="#fff" /> : "Login"}
            </Button>
          </div>
        </form>
        <p className="text-center text-[12px] cursor-pointer">
          Don`t have an account?{" "}
          <span onClick={handleRoute} className="font-bold">
            Sign-up
          </span>
        </p>
      </div>
    </main>
  );
};

export { Login };
