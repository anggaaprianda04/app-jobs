import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobsItem from "./JobsItem";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <>
      <div className="mt-24 mb-10">
        <TitleSection word1="Featured" word2="jobs" />
        <div className="grid grid-cols-4 gap-4 mt-10">
          {[0, 1, 2].map((item: number) => (
            <JobsItem
              image="/images/company.png"
              typeJobs="Full Time"
              location="Paris, France"
              nameJobs="Email Marketing"
              type="Agnecy"
              categories={["Marketing", "Design"]}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste harum consequuntur reiciendis, id consequatur recusandae earum illum mollitia quia est. Neque fugit unde nesciunt ab adipisci eaque eius cum minus?"
              key={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
