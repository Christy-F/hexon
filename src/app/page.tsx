import HeroAndAbout from "@/components/home/HeroAndAbout";
import ServicesAndStats from "@/components/home/ServicesAndStats";
import GalleryAndTestimonials from "@/components/home/GalleryAndTestimonials";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import Accreditations from "@/components/home/Accreditations";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <HeroAndAbout />
      <ServicesAndStats />
      <GalleryAndTestimonials />
      <Accreditations />
      <BrandsMarquee />
    </main>
  );
}
