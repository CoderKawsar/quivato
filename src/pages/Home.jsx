import ChoosePlanSection from "../components/Home/ChoosePlanSection";
import HeroSection from "../components/Home/HeroSection";
import ReviewSection from "../components/Home/ReviewSection";
import WhatWeDoSection from "../components/Home/WhatWeDoSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <ReviewSection />
      <ChoosePlanSection />
    </div>
  );
}

export default Home;
