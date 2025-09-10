"use client";
import { useLanguage } from "../app/context/LanguageContext";


export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="language-switcher">
      <button
        onClick={() => setLang("bn")}
        disabled={lang === "bn"}
        className={`language-btn${lang === "bn" ? " active" : ""}`}
      >
        বাং
      </button>
      <button
        onClick={() => setLang("en")}
        disabled={lang === "en"}
        className={`language-btn${lang === "en" ? " active" : ""}`}
      >
        EN
      </button>
    </div>
  );
}
