"use client";
import InputContainer from "@/components/input-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    account_type: "Customer",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!userData.firstname.trim())
      newErrors.firstname = "First name is required";
    if (!userData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!userData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!userData.phone_number.trim())
      newErrors.phone_number = "Phone number is required";
    if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    setIsLoading(true);
    if (validate()) {
      await axios
        .post("https://360.futamart.com/auth/signup", userData)
        .then((response) => {
          // console.log(response);
          toast({
            title: "Registration successful!",
            description: "You have successfully registered.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          router.push("/login")
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: "Registration failed.",
            description: "Please check your credentials and try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  const handleRoute = () => {
    router.push("/login"); 
  };

  return (
    <main className="my-10 flex flex-col items-center justify-center">
      <div className="border-2 w-[85%] lg:w-[30%] rounded-[8px] lg:p-[2%] py-[10%] px-[3%] flex flex-col gap-3 shadow-lg">
        <div>
          <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
            Signup
          </h1>
          <p className="text-[12px] lg:text-[16px] leading-[30px] text-[#697488]">
            Please enter all credentials to signup
          </p>
        </div>

        <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
          <InputContainer
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
            placeholder={"First Name"}
            type={"text"}
            error={errors.firstname}
            icon={<FiUser size={"20px"} />}
          />
          <InputContainer
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            placeholder={"Last Name"}
            type={"text"}
            error={errors.lastname}
            icon={<FiUser size={"20px"} />}
          />
          <InputContainer
            name="phone_number"
            value={userData.phone_number}
            onChange={handleChange}
            placeholder={"Phone"}
            type={"text"}
            error={errors.phone_number}
            icon={<MdOutlinePhone size={"20px"} />}
          />
          <InputContainer
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder={"Email"}
            type={"text"}
            error={errors.email}
            icon={<MdMailOutline size={"20px"} />}
          />
          <InputContainer
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder={"Password"}
            type={"password"}
            error={errors.password}
            icon={<IoLockClosedOutline size={"20px"} />}
          />
          <div className="flex flex-col gap-3 ">
            <Button className="bg-[#bf2180] px-3 h-[45px] rounded-[13px] hover:bg-[#bf2180] hover:text-white">
              {isLoading ? <ClipLoader color="#fff" /> : "Signup"}
            </Button>
          </div>
        </form>
        <p className="text-center text-[12px] cursor-pointer">
          Have an account?{" "}
          <span onClick={handleRoute} className="font-bold">
            Login
          </span>
        </p>
      </div>
    </main>
  );
};

export { Register };
