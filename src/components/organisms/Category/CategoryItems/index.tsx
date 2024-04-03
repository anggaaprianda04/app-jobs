import React, { FC } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface CategoryItemsProps {
  title: string;
  totalJobs: number;
}

const CategoryItems: FC<CategoryItemsProps> = ({ title, totalJobs }) => {
  return (
    <>
      <div className="border rounded-sm border-border group p-8 cursor-pointer transition-colors hover:bg-primary hover:border-primary hover:text-white">
        <BiCategory className="w-12 h-12 text-primary group-hover:text-white" />
        <p className="text-xl font-semibold mt-5">{title}</p>
        <div className="text-muted-foreground inline-flex gap-1 items-center group-hover:text-white">
          <span className="">{totalJobs} jobs available</span>
          <HiOutlineArrowNarrowRight className="h-5 w-6 hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default CategoryItems;
