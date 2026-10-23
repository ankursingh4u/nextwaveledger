import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Attribution for photographs used across NextWave Ledger, sourced from Wikimedia Commons.",
  alternates: { canonical: "/photo-credits" },
};

const credits = [
  {
    file: "security.jpg",
    title: "Internet Security Padlock for VPN & Online Privacy",
    author: "Mike MacKenzie (mikemacmarketing)",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Internet_Security_Padlock_for_VPN_%26_Online_Privacy.jpg",
  },
  {
    file: "productivity.jpg",
    title: "Kanban board example",
    author: "Dr Ian Mitchell",
    license: "CC BY-SA 2.5",
    source: "https://commons.wikimedia.org/wiki/File:Kanban_board_example.jpg",
  },
  {
    file: "communication.jpg",
    title: "Staff meeting",
    author: "Robert Scoble",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Staff_meeting.jpg",
  },
  {
    file: "finance.jpg",
    title: "Tax calculator",
    author: "Joe Lope",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Tax_calculator.jpg",
  },
  {
    file: "cloud.jpg",
    title: "BalticServers data center",
    author: "BalticServers.com",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:BalticServers_data_center.jpg",
  },
  {
    file: "ai.jpg",
    title: "AI Artificial Intelligence concept",
    author: "Mike MacKenzie (mikemacmarketing)",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:AI_Artificial_Intelligence_concept_(52917075159).jpg",
  },
  {
    file: "marketing.jpg",
    title: "Visitor Analytics Dashboard",
    author: "Visitor Analytics",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Visitor_Analytics_Dashboard.jpg",
  },
  {
    file: "security-2.jpg",
    title: "Google Titan Security Key - Two Factor Authentication",
    author: "Tony Webster",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Google_Titan_Security_Key_-_Two_Factor_Authentication_(47400104011).jpg",
  },
  {
    file: "security-3.jpg",
    title: "U2F Hardware Authentication Security Keys",
    author: "Tony Webster",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:U2F_Hardware_Authentication_Security_Keys_(Yubico_Yubikey_4_and_Feitian_MultiPass_FIDO)_(42286852310).jpg",
  },
  {
    file: "productivity-2.jpg",
    title: "Person writing in a notebook while sitting at a desk",
    author: "Nenad Stojković",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Person_writing_in_a_notebook_while_sitting_at_a_desk.jpg",
  },
  {
    file: "productivity-3.jpg",
    title: "Checklist",
    author: "Oftcc",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Checklist.jpg",
  },
  {
    file: "cloud-2.jpg",
    title: "Cloud storage",
    author: "R Vasudevan",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Cloud_storage.jpg",
  },
];

export default function PhotoCreditsPage() {
  return (
    <LegalLayout title="Photo Credits" updated="October 21, 2026">
      <p>
        Category and card photography across NextWave Ledger is sourced from Wikimedia Commons
        and used under the license each photographer chose. No photo on this site is presented
        as a screenshot of a specific tool we have personally tested unless explicitly stated in
        that article&apos;s product card — these are representative category photos, not product
        screenshots.
      </p>

      <div className="not-prose mt-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Photo</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Author</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">License</th>
              <th className="border-b border-border px-4 py-3 font-semibold text-muted">Source</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((c) => (
              <tr key={c.file}>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.title}</td>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.author}</td>
                <td className="border-b border-border px-4 py-3 text-foreground/90">{c.license}</td>
                <td className="border-b border-border px-4 py-3">
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-dark">
                    Wikimedia Commons
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LegalLayout>
  );
}
