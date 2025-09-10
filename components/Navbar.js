"use client";
import Link from "next/link";
import { useLanguage } from "../app/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import DonateButton from "./DonateButton";

const texts = {
  bn: {
    logo: "নিরপেক্ষ স্বার্থ",
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    members: "সদস্যবৃন্দ",
    activities: "কার্যক্রম",
    gallery: "গ্যালারি",
    library: "গ্রন্থাগার",
    trainingCenter: "কম্পিউটার প্রশিক্ষণ ",
    join: "যুক্ত হোন",
    contact: "যোগাযোগ",
  },
  en: {
    logo: "Niropekkho Swartho",
    home: "Home",
    about: "About Us",
    members: "Members",
    activities: "Activities",
    gallery: "Gallery",
    library: "Library",
    trainingCenter: "Computer Training ",
    join: "Join Us",
    contact: "Contact",
  },
};

export default function Navbar() {
  const { lang } = useLanguage();

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${lang === "bn"
            ? "BanRegularFont, sans-serif"
            : "EnFont, sans-serif"};
        }
      `}</style>
      <nav className="Navbar ">
        <div className="Container">
          <div className="NavbarContent">
          <div
            className="NavbarLogo"
            style={{
              fontFamily:
                lang === "bn"
                  ? "BanRegularFont, sans-serif"
                  : "EnFont, sans-serif",
            }}
          >
            <Link href="/">{texts[lang].logo}</Link>
          </div>

          <div
            className="NavbarMenu"
            style={{
              fontFamily:
                lang === "bn"
                  ? "BanRegularFont, sans-serif"
                  : "EnFont, sans-serif",
            }}
          >
            <Link href="/">{texts[lang].home}</Link>
            <Link href="/About">{texts[lang].about}</Link>
            <Link href="/Member">{texts[lang].members}</Link>
            <Link href="/Activities">{texts[lang].activities}</Link>
            <Link href="/Gallery">{texts[lang].gallery}</Link>
            <Link href="/Library">{texts[lang].library}</Link>
            <Link href="/Training">{texts[lang].trainingCenter}</Link>
            <Link href="/Join">{texts[lang].join}</Link>
            <Link href="/Contact">{texts[lang].contact}</Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <LanguageSwitcher />
            <DonateButton />
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
