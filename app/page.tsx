import Adventure from "@/components/Adventure";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegistrationSection";
import Terms from "@/components/Terms";
import Winner from "@/components/Winner";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Hero />
      <RegisterSection />
      <Adventure />
      <Winner />
      <Terms />
    </Container>
  );
}
