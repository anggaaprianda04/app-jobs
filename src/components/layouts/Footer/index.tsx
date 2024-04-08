import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-slate-900 px-32 pt-16 pb-11 text-foreground">
      <div className="flex flex-row justify-between items-start">
        <div>
          <Image
            src="/images/logo.png"
            alt="/images/logo.png"
            width={160}
            height={32}
          />
          <div className="text-muted mt-8">
            Great platform for the job seeker that passionate <br /> about
            startups. Find your dream job easier.
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-4">
            About
          </div>
          <div className="space-y-4">
            {aboutLinks.map((item: string, index: number) => (
              <Link className="text-muted block" href="/" key={index}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-4">
            Resource
          </div>
          <div className="space-y-4">
            {resourceLinks.map((item: string, index: number) => (
              <Link className="text-muted block" href="/" key={index}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-4">
            Get Jobs Notifications
          </div>
          <div className="text-muted">
            The latest job news, articles, sent to <br /> your inbox weekly
          </div>
          <div className="mt-6">
            <div className="flex flex-row gap-4 justify-between">
              <Input placeholder="Email Address"></Input>
              <Button variant={"default"}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-500 mt-16 mb-10" />
      <div className="flex flex-row justify-between">
        <div className="text-slate-500">
          2021 @ JobHuntly. All rights reserved
        </div>
        <div className="space-x-3">
          {socialMediaImg.map((item: string, index: number) => (
            <Image
              className="inline"
              width={32}
              height={32}
              src={item}
              alt={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
