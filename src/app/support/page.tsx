import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "Contact Us",
    body: "Email us at support@wildlensapp.com. We aim to respond within 2 business days.",
  },
  {
    heading: "Frequently Asked Questions",
    body: "When does WildLens launch?\nWe're targeting a launch on iOS and Android later this year. Join the waitlist at wildlensapp.com to be notified first.\n\nWhich regions does WildLens cover?\nThe initial release covers the Sonoran Desert region (Arizona, California, and northern Mexico) with 500+ plant, bird, insect, and snake species.\n\nDoes identification require an internet connection?\nNo. Species identification runs entirely on-device and works without any signal.\n\nHow do I delete my account?\nOnce the app launches, you can delete your account from the Profile tab under Settings → Delete Account. All your data will be permanently removed.",
  },
  {
    heading: "Report a Bug",
    body: "Found something broken? Email support@wildlensapp.com with a description of the issue, your device model, and iOS/Android version. Screenshots are very helpful.",
  },
];

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
