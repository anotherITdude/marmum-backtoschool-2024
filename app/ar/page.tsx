import Adventure from "@/components/Adventure";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import HowToEnter from "@/components/HowToEnter";
import RegisterSection from "@/components/RegistrationSection";
import Terms from "@/components/Terms";
import Winner from "@/components/Winner";

export default function Home() {
  return (
    <Container>
      <Hero />
      <RegisterSection />
      <Adventure />
      <Winner />
      <HowToEnter/>
      <Terms />
    </Container>
  );
}