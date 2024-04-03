import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";

interface BannerSingUpProps {}

const BannerSingUp: FC<BannerSingUpProps> = ({}) => {
  return (
    <>
      <div className="mt-24 mb-10 bg-primary text-white px-16 pt-12 flex flex-row justify-between items-start">
        <div>
          <div className="text-5xl font-semibold">
            Start posting <br /> jobs today
          </div>
          <p className="text-white my-12">Start posting job for only $10</p>
          <Button size="lg" className="hover:text-primary" variant="secondary">
            Sing Up for free
          </Button>
        </div>
        <div>
          <Image
            src="/images/dashboard.png"
            alt="/images/dashboard.png"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default BannerSingUp;
