"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@chakra-ui/react";

const formatDateToLocal = (date) => {
  const adjustedDate = new Date(date);
  adjustedDate.setMinutes(
    adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset()
  );
  return adjustedDate.toISOString().slice(0, 10);
};

export const DatePicker = ({
  selectedDate,
  onDateChange,
  placeholder,
  buttonClassName,
  calendarClassName,
  minDate, // Add minDate to the props
}) => {
  const toast = useToast();
  const [date, setDate] = useState(selectedDate);

  const handleDateSelect = (selected) => {
    // Check if selected date is after or equal to minDate
    if (minDate && new Date(selected) < new Date(minDate)) {
      toast({
        title: "Invalid Date!",
        description: "Check-in date cannot be in the past.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formattedSelectedDate = formatDateToLocal(selected);
    setDate(selected);
    if (onDateChange) {
      onDateChange(formattedSelectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal h-[50px] rounded-[13px] text-[12px]",
            !date && "text-muted-foreground",
            buttonClassName
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDateToLocal(date) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0", calendarClassName)}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          // Pass the minDate to the Calendar component to disable dates before it
          disabled={(day) => minDate && new Date(day) < new Date(minDate)}
        />
      </PopoverContent>
    </Popover>
  );
};
