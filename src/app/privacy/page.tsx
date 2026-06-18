import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "What We Collect",
    body: "We collect only your email address when you join the WildLens waitlist. Once the app launches, we collect account information (name, email) and app usage data such as species sightings you save. Photos taken in-app are processed on-device and are never uploaded to our servers.",
  },
  {
    heading: "How We Use It",
    body: "Your email is used solely to notify you when WildLens launches. In-app data is used to power your personal journal, streaks, and species counts. We do not sell your data or share it with third parties for advertising.",
  },
  {
    heading: "On-Device Processing",
    body: "Species identification runs entirely on your device using on-device AI. Photos you take are not sent to any server. Camera and photo library access is used only to capture or select images for identification.",
  },
  {
    heading: "Data Retention",
    body: "Waitlist emails are deleted once the app launches and invites are sent. You may request deletion of your account and all associated data at any time by contacting us or using the in-app account deletion feature.",
  },
  {
    heading: "Contact",
    body: "Questions about privacy? Email us at privacy@wildlensapp.com.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
