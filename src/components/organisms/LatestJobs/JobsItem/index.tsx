import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface JobsItemProps extends JobType {}

const JobsItem: FC<JobsItemProps> = ({
  categories,
  image,
  location,
  nameJobs,
  typeJobs,
  type,
}) => {
  return (
    <div className="p-8 rounded-sm border border-border flex gap-2 flex-row justify-between cursor-pointer transition-colors hover:bg-primary/5 hover:duration-75">
      <div className="flex flex-col items-center">
        <Image src={image} alt={image} width={64} height={64} />
        <Badge className="mt-2" variant={"secondary"}>
          {typeJobs}
        </Badge>
      </div>
      <div className="mt-1">
        <p className="text-lg font-semibold text-ellipsis line-clamp-1">
          {nameJobs}
        </p>
        <p className="text-sm mb-2 text-muted-foreground">
          {type}. {location}
        </p>
        <Separator orientation="horizontal" />
        <div className="h-5 mt-3 inline-flex gap-2 items-center">
          {categories.map((item: string, i: number) => (
            <Badge
              className="rounded border-primary bg-primary/5 text-primary"
              key={i}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsItem;
