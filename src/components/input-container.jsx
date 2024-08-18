"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const InputContainer = ({ type, placeholder, icon, label, error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <label className="text-[12px]">{label}</label>
      <div
        className={`flex px-3 h-[50px] border-2 rounded-[13px] items-center ${
          isFocused ? " border-[#0f61f9]" : "border-gray-300"
        }`}
      >
        <span className="text-[#0f61f9]">{icon}</span>
        <Input
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          className="outline-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent text-[14px]"
        />
      </div>
    </div>
  );
};

export default InputContainer;
