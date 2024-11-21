import OurMission from "./OurMission";
import WhoAreWe from "./WhoAreWe";
export default function AboutUs() {
  return (
    <>
      <section
        id="aboutUs"
        className="
        bg-[#253528]
        min-h-[90lvh] 
        relative 
        text-white
        px-2
        py-2
        md:px-40"
      >
        <WhoAreWe />
        <OurMission />
      </section>
    </>
  );
}