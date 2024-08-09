import Adventure from "@/components/Adventure";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegistrationSection";

export default function Home() {
  return (
    <Container>
      <Hero />
      <RegisterSection />
      {/* <Adventure /> */}
    </Container>
  );
}