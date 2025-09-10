"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "গ্যালারি",
    description: "আমাদের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি দেখুন।",
    comingSoon: "শীঘ্রই আসছে..."
  },
  en: {
    title: "Gallery",
    description: "View photos from our various activities and events.",
    comingSoon: "Coming Soon..."
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Gallery পেজ" : "This is Gallery page"}</h1>
    </div>
  );
};

export default page;
