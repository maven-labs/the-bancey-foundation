import MentorshipRegistrationForm from "@/components/mentorship-registration-form";
import PageHeader from "@/components/ui/page-header";

function ProgramDetail() {
  return (
    <>
      <PageHeader title="Mentorship" />
      <li>How it works</li>
      <li>Who can apply</li>
      <li>Who can volunteer</li>
      <MentorshipRegistrationForm />
    </>
  );
}

export default ProgramDetail;
