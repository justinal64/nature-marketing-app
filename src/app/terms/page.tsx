import LegalLayout from "@/components/LegalLayout";

const sections = [
  {
    heading: "Acceptance",
    body: "By using WildLens or joining the waitlist, you agree to these terms. If you do not agree, please do not use our services.",
  },
  {
    heading: "Use of the App",
    body: "WildLens is for personal, non-commercial use. You may not reverse-engineer, copy, or redistribute the app or its content. Species identification results are informational only — always consult a professional before acting on safety-related information (e.g., venomous snake identification).",
  },
  {
    heading: "Intellectual Property",
    body: "All app content, design, and code are owned by WildLens. Species data is sourced from open-licensed databases (iNaturalist, GBIF, eBird) and attributed accordingly within the app.",
  },
  {
    heading: "Limitation of Liability",
    body: "WildLens is provided as-is. We are not liable for any damages arising from use of the app, including misidentification of species. Do not rely on WildLens as your sole source of information in any situation involving personal safety.",
  },
  {
    heading: "Changes",
    body: "We may update these terms at any time. Continued use of the app after changes constitutes acceptance. We will notify registered users of material changes via email.",
  },
  {
    heading: "Contact",
    body: "Questions? Email support@wildlensapp.com.",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="June 2026"
      sections={sections}
    />
  );
}
