import { Badge } from "@/components/ui/badge";
import { JobType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface JobsItemProps extends JobType {}

const JobsItem: FC<JobsItemProps> = ({
  image,
  location,
  description,
  categories,
  nameJobs,
  typeJobs,
  type,
}) => {
  return (
    <div className="py-8 px-4 border border-border cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <Image width={40} height={40} src={image} alt={image} />
        <span className="py-1 px-2 border text-xs border-primary">
          {typeJobs}
        </span>
      </div>
      <div className="my-4">
        <p className="text-2xl font-bold mb-4">{nameJobs}</p>
        <p className="text-muted-foreground">
          {type}. {location}
        </p>
        <div className="text-muted-foreground mt-3 line-clamp-2 text-ellipsis">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((item: string, i: number) => (
          <Badge key={i}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};

export default JobsItem;
