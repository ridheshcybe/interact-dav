import ClubSignup from "@/components/cta";
import { Feature1 } from "@/components/features1";
import { Feature2 } from "@/components/features2";
import MembersCarousel from "@/components/members";
import { Hero } from "@/components/hero";
import FAQSection from "@/components/faq";
import { Footer } from "@/components/footer";
export default function Root() {
  return (
    <div>
      <Hero />
      <ClubSignup />
      <Feature1 />
      <Feature2 />
      <MembersCarousel />
      <FAQSection />
      <Footer />
    </div>
  );
}
