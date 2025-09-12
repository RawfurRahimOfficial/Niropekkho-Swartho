"use client";
import { useLanguage } from "../app/context/LanguageContext";
import { useRouter } from "next/navigation";

const texts = {
  bn: {
    donate: "দান করুন",
    donateTitle: "দান করুন",
    donateDescription: "আমাদের সংগঠনের উন্নয়নে সহায়তা করুন। আপনার দান আমাদের কার্যক্রম চালিয়ে যেতে সাহায্য করবে।",
    donateNow: "এখনই দান করুন",
    thankYou: "ধন্যবাদ"
  },
  en: {
    donate: "Donate",
    donateTitle: "Donate",
    donateDescription: "Help us in the development of our organization. Your donation will help us continue our activities.",
    donateNow: "Donate Now",
    thankYou: "Thank You"
  }
};

export default function DonateButton() {
  const { lang } = useLanguage();
  const router = useRouter();

  const handleDonate = () => {
    router.push('/Donate');
  };

  return (
    <button
      onClick={() => {
        handleDonate();
        setMobileOpen(false);
      }}
      className={`donate-btn ${lang}`}
    >
      {texts[lang].donate}
    </button>
  );
}
