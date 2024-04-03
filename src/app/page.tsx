import BannerSingUp from "@/components/organisms/BannerSingUp";
import Category from "@/components/organisms/Category";
import Client from "@/components/organisms/Clients";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <Client />
      <Category />
      <BannerSingUp />
    </div>
  );
}
