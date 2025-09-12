"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
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
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: texts[lang].home },
    { href: "/About", label: texts[lang].about },
    { href: "/Member", label: texts[lang].members },
    { href: "/Activities", label: texts[lang].activities },
    { href: "/Gallery", label: texts[lang].gallery },
    { href: "/Library", label: texts[lang].library },
    { href: "/Training", label: texts[lang].trainingCenter },
    { href: "/Join", label: texts[lang].join },
    { href: "/Contact", label: texts[lang].contact },
  ];

  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${lang === "bn"
            ? "BanRegularFont, sans-serif"
            : "EnFont, sans-serif"};
        }
        .navbar-link.active {
          color: #145da0 !important;
          font-weight: bold;
          border-bottom: 2px solid #145da0;
        }
      `}</style>
      <nav className="Navbar ">
        <div className="Container">
          <div className="NavbarContent">
            <div className="NavbarLogo">
              <Link href="/">{texts[lang].logo}</Link>
            </div>

            <div className="NavbarMenu">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link${
                    active === link.href ? " active" : ""
                  }`}
                  onClick={() => setActive(link.href)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="navbar-underline"
                      initial={{ opacity: 0, scaleX: 0.6 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.6 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -2,
                        width: "100%",
                        height: "2px",
                        background: "#145da0",
                        borderRadius: "2px",
                        transformOrigin: "left",
                      }}
                      transition={{
                        opacity: { duration: 0.2 },
                        scaleX: { type: "spring", stiffness: 400, damping: 30 },
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <LanguageSwitcher />
              <DonateButton className="MobileDonateButton" />
              <div
                className="NavbarToggle"
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu-icon lucide-menu"
                  style={{ cursor: "pointer" }}
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar Overlay */}
        {mobileOpen && (
          <motion.div
            className="MobileNavbarOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
        <motion.div
          className="MobileNavbarContent"
          initial={false}
          animate={mobileOpen ? "open" : "closed"}
          variants={{
            open: {
              x: 0,
              opacity: 1,
              display: "block",
              transition: {
                ease: "easeInOut",
                duration: 0.3, // faster open
                when: "beforeChildren",
              },
            },
            closed: {
              x: "-100vw",
              opacity: 0,
              display: "none",
              transition: {
                ease: "easeInOut",
                duration: 0.25,
                when: "afterChildren",
              },
            },
          }}
        >
          {/* Header */}
          <motion.div 
          ckassName="MobileNavbarHeader"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
          }}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
          >
            <div className="MobileNavbarLogo">
              <h1>নিরপেক্ষ স্বার্থ</h1>
              <p>অন্যের খুশিতে আমরা হাশি</p>
            </div>
            <div
              className="MobileNavbarClose"

              onClick={() => setMobileOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </motion.div>

          {/* Menu Links with fast stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08, // faster
                },
              },
              hidden: {},
            }}
            className="MobileNavbarMenu"
            style={{ padding: "30px 20px" }}
          >
            {links.map((link) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { ease: "easeOut", duration: 0.25 },
                  },
                }}
              >
                <Link
                  href={link.href}
                  className={`navbar-link${
                    active === link.href ? " active" : ""
                  }`}
                  onClick={() => {
                    setActive(link.href);
                    setMobileOpen(false);
                  }}
                  style={{
                    position: "relative",
                    display: "block",
                    marginBottom: "20px",
                    fontSize: "20px",
                  }}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="mobile-navbar-underline"
                      initial={{ opacity: 0, scaleX: 0.6 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.6 }}
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: -2,
                        width: "100%",
                        height: "2px",
                        background: "#145da0",
                        borderRadius: "2px",
                        transformOrigin: "left",
                      }}
                      transition={{
                        opacity: { duration: 0.15 },
                        scaleX: { ease: "easeOut", duration: 0.25 },
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "0 20px",
            }}
          >
            <LanguageSwitcher className="MobileLanguageSwitcher" />
          </motion.div>
        </motion.div>
      </nav>
    </>
  );
}
