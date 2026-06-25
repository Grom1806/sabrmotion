import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mockups from "@/components/sections/Mockups";
import Statement from "@/components/sections/Statement";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import LetsTalk from "@/components/sections/LetsTalk";
import Process from "@/components/sections/Process";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import Marquee from "@/components/Marquee";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <BackToTop />
      <ChatBot />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Mockups />
        <Statement />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Pricing />
        <LetsTalk />
      </main>
      <Footer />
    </>
  );
}
