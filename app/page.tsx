import Adventure from "@/components/Adventure";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegistrationSection";
import Terms from "@/components/Terms";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Hero />
      <RegisterSection />
      <Terms />
      {/* <Adventure /> */}
    </Container>
  );
}
