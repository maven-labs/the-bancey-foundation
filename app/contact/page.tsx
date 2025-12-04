import GeneralEnquiries from "@/components/general-enquiries";
import GettingInvolved from "@/components/getting-involved";
import PageHeader from "@/components/ui/page-header";

function Contact() {
  return (
    <main>
      <PageHeader prefix="Contact Us" title="Contact Us" />
      <GeneralEnquiries />
      <GettingInvolved />
    </main>
  );
}

export default Contact;
