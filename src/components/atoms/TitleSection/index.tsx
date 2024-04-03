import React, { FC } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface TitleSectionProps {
  word1: string;
  word2: string;
}

const TitleSection: FC<TitleSectionProps> = ({ word1, word2 }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="text-4xl font-bold">
          {word1} <span className="text-primary">{word2}</span>
        </div>
        <div className="inline-flex gap-2 items-center font-semibold text-primary cursor-pointer">
          <span>Show All jobs</span>
          <HiOutlineArrowNarrowRight className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default TitleSection;
