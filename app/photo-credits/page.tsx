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
  {
    file: "security-4.jpg",
    title: "Username and password",
    author: "Santeri Viinamäki",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Username_and_password_20170626.jpg",
  },
  {
    file: "security-5.jpg",
    title: "CryptoCard two factor",
    author: "Brian Ronald",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:CryptoCard_two_factor.jpg",
  },
  {
    file: "security-6.jpg",
    title: "Fingerprint Scanner",
    author: "Mike MacKenzie (mikemacmarketing)",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Fingerprint_Scanner.jpg",
  },
  {
    file: "productivity-4.png",
    title: "LibreOffice Calc 7.5.0 on Windows 10",
    author: "Hérisson grognon",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:LibreOffice_Calc_7.5.0_Windows10.png",
  },
  {
    file: "productivity-5.jpg",
    title: "Woman sits at desk working on laptop in home office",
    author: "Shixart1985",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Woman_sits_at_desk_working_on_laptop_in_home_office.jpg",
  },
  {
    file: "communication-2.jpg",
    title: "Fediverse smartphone apps",
    author: "Elena Rossini (via Elexfedi)",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Fediverse_smartphone_apps_(photo_by_Elena_Rossini).jpg",
  },
  {
    file: "communication-3.jpg",
    title: "Video call documentation, Wikivoyage Indonesia",
    author: "IHLubis",
    license: "CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Dokumentasi_sosialisasi_Wikivoyage_Indonesia_Bersama_Wmid.jpg",
  },
  {
    file: "communication-4.png",
    title: "Screenshot of the Twoblade email client's interface",
    author: "TheGarrulousMky",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Screenshot_of_the_Twoblade_email_client%27s_Interface.png",
  },
  {
    file: "cloud-3.jpg",
    title: "WD Blue hard disk drive connected to laptop via USB-C",
    author: "Augkun-ane",
    license: "CC BY 4.0",
    source: "https://commons.wikimedia.org/wiki/File:WD_Blue_Hard_Disk_Drive_connected_to_Laptop_via_USB-C.jpg",
  },
  {
    file: "cloud-4.jpg",
    title: "Server rack with spaghetti-like mass of network cables",
    author: "Kim Scarborough",
    license: "CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Server_Rack_with_Spaghetti-Like_Mass_of_Network_Cables.jpg",
  },
  {
    file: "finance-2.jpg",
    title: "Desktop with laptop and calculator",
    author: "Unsplash (unknown author)",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Desktop_with_laptop_and_calculator_(Unsplash).jpg",
  },
  {
    file: "ai-2.png",
    title: "Artificial neural network with chip",
    author: "Mike MacKenzie (mikemacmarketing) / Liam Huang",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Artificial_Neural_Network_with_Chip.png",
  },
  {
    file: "ai-3.jpg",
    title: "Python code and matplotlib physics simulation on screen",
    author: "MikeRun",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Screen-python-code-matplotlib-physics-simulation.jpg",
  },
  {
    file: "ai-4.jpg",
    title: "Code on computer monitor",
    author: "Markus Spiske",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg",
  },
  {
    file: "marketing-2.png",
    title: "Spammed mail folder",
    author: "Dadu",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Spammed-mail-folder-2024-french.png",
  },
  {
    file: "marketing-3.jpg",
    title: "Inbox & outbox",
    author: "philippechazal",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Inbox_%26_Outbox.jpg",
  },
  {
    file: "marketing-4.jpg",
    title: "Books, pencils, laptop, and iPhone on a desk",
    author: "Aleks Dorohovich",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Books,_pencils,_laptop,_and_iphone_on_a_desk_(Unsplash).jpg",
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
