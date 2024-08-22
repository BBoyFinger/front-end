import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { mockFilters } from "@/lib/mock/Fillter";
import { FilterType } from "@/lib/interface";
import { Checkbox } from "../ui/checkbox";
interface FilterProps {
  filters: FilterType[];
}

const Filters: React.FC<FilterProps> = ({ filters }) => {
  return (
    <div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {filters.map((filter) => (
            <AccordionItem key={filter.id} value={filter.id}>
              <AccordionTrigger>{filter.name}</AccordionTrigger>
              <AccordionContent>
                {filter.options.map((option) => (
                  <div className="flex items-center space-x-2 gap-2 my-2">
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
    </div>
  );
};

export default Filters;
