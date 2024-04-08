import BannerSingUp from "@/components/organisms/BannerSingUp";
import Category from "@/components/organisms/Category";
import Client from "@/components/organisms/Clients";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import Hero from "@/components/organisms/Hero";
import LatestJobs from "@/components/organisms/LatestJobs";

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <Client />
      <Category />
      <BannerSingUp />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
