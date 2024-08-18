import InputContainer from "@/components/input-container";
import React from "react";
import { FiUser } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <main className="my-[60px] flex flex-col gap-5 mx-[20px] lg:mx-[60px] ">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Contact Us
        </h1>
        <p className="text-[#697488] leading-0 lg:leading-[35px]">
          We will reply to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="border-2 p-[3%] rounded-[8px] flex flex-col gap-10 w-full lg:w-[70%]">
          <div>
            <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
              We'd love to hear from you
            </h1>
            <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
              Send us a message and we'll respond as soon as possible
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between w-full">
            <InputContainer
              label={"Your Name"}
              placeholder={"Your Name"}
              type={"text"}
              icon={<FiUser size={"20px"} />}
            />
            <InputContainer
              label={"Email"}
              placeholder={"Email"}
              type={"text"}
              icon={<MdMailOutline size={"20px"} />}
            />
          </div>
          <div className="flex border-2 p-2 w-full rounded-[13px] items-start">
            <IoPencil size={"20px"} color="#0f61f9" />
            <Textarea
              placeholder="message"
              className="focus-visible:ring-transparent focus-visible:ring-0 outline-none border-0 w-fit"
            />
          </div>
          <div className="ml-auto">
            <Button
              //   onClick={handleRoute}
              className="bg-[#0f61f9] px-3 h-[45px] rounded-[13px] hover:bg-[#02338d] hover:text-white w-[200px]"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="border-2 w-full lg:w-[30%] p-[3%] rounded-[8px] flex flex-col gap-10">
          <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
            {" "}
            Contact Us
          </h1>
          <div className="flex gap-5 items-center">
            <span className="flex items-center justify-center h-[50px] w-[50px] rounded-[100px] p-1 bg-[#0f61f9]">
              <IoLocationOutline color="#fff" />
            </span>
            <div>
              {" "}
              <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
                Address
              </h1>
              <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
                33 Canton Road, Tsim Sha Tsui, Hong Kong
              </p>
            </div>{" "}
          </div>
          <div className="flex gap-5 items-center">
            <span className="flex items-center justify-center h-[50px] w-[50px] rounded-[100px] p-1 bg-[#0f61f9]">
              <MdOutlineLocalPhone color="#fff" />
            </span>
            <div>
              {" "}
              <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
                Phone
              </h1>
              <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
                +852-1264-5524
              </p>
            </div>{" "}
          </div>
          <div className="flex gap-5 items-center">
            <span className="flex items-center justify-center h-[50px] w-[50px] rounded-[100px] p-1 bg-[#0f61f9]">
              <MdOutlineEmail color="#fff" />
            </span>
            <div>
              {" "}
              <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
                Email
              </h1>
              <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
                support@360travel.net
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Contact };
