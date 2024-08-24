import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { mockFilters } from "@/lib/mock/Fillter";
import { FilterType } from "@/lib/interface";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { RiMenu5Line } from "react-icons/ri";
interface FilterProps {
  filters: FilterType[];
}

export const DesktopFilters: React.FC<FilterProps> = ({ filters }) => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {filters.map((filter) => (
          <AccordionItem key={filter.id} value={filter.id}>
            <AccordionTrigger>{filter.name}</AccordionTrigger>
            <AccordionContent>
              {filter.options.map((option) => (
                <div
                  className="flex items-center space-x-2 gap-2 my-2"
                  key={option.label}
                >
                  <Checkbox id={option.value} />
                  <label
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const MobileFillter: React.FC<FilterProps> = ({ filters }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex gap-1 items-center border-solid border p-[5px] rounded-sm cursor-pointer border-black w-full">
          <span>Filters</span>
          <RiMenu5Line />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <Accordion type="single" collapsible className="w-full">
            {filters.map((filter) => (
              <AccordionItem key={filter.id} value={filter.id}>
                <AccordionTrigger>{filter.name}</AccordionTrigger>
                <AccordionContent>
                  {filter.options.map((option, index) => (
                    <div
                      className="flex items-center space-x-2 gap-2 my-2"
                      key={index}
                    >
                      <Checkbox id={option.value} />
                      <label
                        htmlFor={option.value}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        <div className="flex gap-2">
          <Button variant={"outline"} className="w-full">Reset</Button>
          <Button className="w-full">Apply</Button>
        </div>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  );
};
