import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbType } from "@/lib/interface";

interface BreadcrumProps {
  breadcrumbs: BreadcrumbType[];
}

const BreadcrumbComponent: React.FC<BreadcrumProps> = ({ breadcrumbs }) => {
  console.log(typeof breadcrumbs);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {breadcrumbs?.map((item) => (
            <div className="flex" key={item.id}>
              <BreadcrumbItem>
                <BreadcrumbLink href="${breadcrumb.href}">
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
