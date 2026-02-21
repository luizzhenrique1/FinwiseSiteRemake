
import { Header } from "@/components/header";
import { Hero } from "@/components/Hero";
import { FeaturesSection} from "@/components/Face1";
import { Finish } from "@/components/Finish";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Suport } from "@/components/Suport";
import { Terms } from "@/components/Terms";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <FeaturesSection />
      <About />
      <Suport />
      <Terms />
      <Footer />
      <div className="flex justify-center">
    </div>
      
    </div>
  );
}
