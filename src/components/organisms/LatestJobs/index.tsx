import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import JobsItem from "./JobsItem";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = () => {
  return (
    <div className="mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="grid grid-cols-3 gap-8 mt-10">
        {[0, 1, 2].map((item: number) => (
          <JobsItem
            key={item}
            nameJobs="Social Media Assistant"
            image="/images/company2.png"
            type="Agency"
            location="Paris, France"
            typeJobs="Full Time"
            categories={["Marketing", "Design"]}
            description="desc"
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
