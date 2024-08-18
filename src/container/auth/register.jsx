"use client";
import InputContainer from "@/components/input-container";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";

const Register = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/login");
  };
  return (
    <main className="my-[50px] flex flex-col items-center justify-center">
      <div className="border-2 w-[85%] lg:w-[30%] rounded-[8px] lg:p-[2%] py-[10%] px-[3%] flex flex-col gap-3">
        <div>
          <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
            Signup
          </h1>
          <p className="text-[12px] lg:text-[16px] leading-[30px] text-[#697488]">
            Please enter all credentials to signup
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <InputContainer
            label={"First Name"}
            placeholder={"First Name"}
            type={"text"}
            icon={<FiUser size={"20px"} />}
          />
          <InputContainer
            label={"Last Name"}
            placeholder={"Last Name"}
            type={"text"}
            icon={<FiUser size={"20px"} />}
          />
          <InputContainer
            label={"Phone"}
            placeholder={"Phone"}
            type={"text"}
            icon={<MdOutlinePhone size={"20px"} />}
          />
          <InputContainer
            label={"Email"}
            placeholder={"Email"}
            type={"text"}
            icon={<MdMailOutline size={"20px"} />}
          />
          <InputContainer
            label={"Password"}
            placeholder={"Password"}
            type={"text"}
            icon={<IoLockClosedOutline size={"20px"} />}
          />
          <div className="flex flex-col gap-3 ">
            <Button className="bg-[#0f61f9] px-3 h-[45px] rounded-[13px] hover:bg-[#02338d] hover:text-white">
              Signup
            </Button>
          </div>
        </form>
        <Button
          onClick={handleRoute}
          className="bg-transparent border-2 border-[#0f61f9] px-3 h-[45px] text-[#0f61f9] rounded-[13px] hover:bg-[#0f61f9] hover:text-white"
        >
          Login
        </Button>
      </div>
    </main>
  );
};

export { Register };
