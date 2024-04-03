import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import CategoryItems from "./CategoryItems";

interface CategoryProps {}

const Category: FC<CategoryProps> = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Explore by" word2="category" />
      <div className="mt-10 grid gap-2 grid-cols-5">
        {[1, 2, 3, 4, 5].map((val: number) => (
          <CategoryItems title="Category" totalJobs={100} key={val} />
        ))}
      </div>
    </div>
  );
};

export default Category;
