"use client";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Home পেজ" : "This is Home page"}</h1>
    </div>
  );
}
