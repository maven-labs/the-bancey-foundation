import AboutTheFoundation from "@/components/about_the_foundation";
import ContactUs from "@/components/contact-us";
import Leadership from "@/components/leadership";
import Mission from "@/components/mission";
import PageHeader from "@/components/ui/page-header";
import Vision from "@/components/vision";
import WaysToGive from "@/components/ways-to-give";

function About() {
  return (
    <main>
      <PageHeader
        prefix="About Us"
        title="About The Bancey Foundation"
        image="/images/2050.jpg"
      />
      <AboutTheFoundation />
      <Mission />
      <Vision />
      <Leadership />
      <WaysToGive />
      <ContactUs />
    </main>
  );
}

export default About;
