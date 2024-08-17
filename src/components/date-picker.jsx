"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();

const formattedDate = `${day}-${String(month + 1).padStart(2, 0)}-${String(
  year
).padStart(2, 0)}`;

export const DatePicker = ({
  selectedDate,
  onDateChange,
  placeholder = formattedDate,
  buttonClassName,
  calendarClassName,
}) => {
  const [date, setDate] = useState(selectedDate);

  const handleDateSelect = (selected) => {
    setDate(selected);
    if (onDateChange) {
      onDateChange(selected);
    }
  };
//   const formatDate = (dateValue) => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, 0);
//     const day = String(today.getDay()).padStart(2, 0);

//     return `${day}-${month}-${year}`;
//   };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal h-[50px] rounded-[13px]",
            !date && "text-muted-foreground",
            buttonClassName
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", calendarClassName)}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
