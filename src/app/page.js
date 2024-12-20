

import About from "./component/About/page";
import Banner from "./component/Banner/page";
import Category from "./component/Category/page";
import Feature from "./component/Features/page";
import LearnMore from "./component/LearnMore/page";
import SubBanner from "./component/subBanner/page";
import Testimonials from "./component/Testimonials/page";
import VideoSection from "./component/VideoSection/page";


export default function Home() {
  return (
    <>
      <Banner />
      <SubBanner />
      <Feature />
      <About />
      <Category />
      <LearnMore />
      <VideoSection />
      <Testimonials />
    </>
  );
}
