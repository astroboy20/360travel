"use client";
import InputContainer from "@/components/input-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const Login = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/signin");
  };
  return (
    <main className="my-[50px] flex flex-col items-center justify-center">
      <div className="border-2 w-[85%] lg:w-[30%] rounded-[8px] lg:p-[2%] py-[10%] px-[3%] flex flex-col gap-5">
        <div>
          <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
            Login
          </h1>
          <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
            Please enter your account credentials below
          </p>
        </div>

        <form className="flex flex-col gap-3">
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
          <div className="text-[#697488] text-[12px] flex justify-between items-center">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" />
              <p>Remember me</p>
            </label>
            <Link href={"/"}>Reset password</Link>
          </div>
          <div className="flex flex-col gap-3 ">
            <Button className="bg-[#0f61f9] px-3 h-[45px] rounded-[13px] hover:bg-[#02338d] hover:text-white">
              Login
            </Button>
          </div>
        </form>
        <Button
          onClick={handleRoute}
          className="bg-transparent border-2 border-[#0f61f9] px-3 h-[45px] text-[#0f61f9] rounded-[13px] hover:bg-[#0f61f9] hover:text-white"
        >
          Signup
        </Button>
      </div>
    </main>
  );
};

export { Login };
