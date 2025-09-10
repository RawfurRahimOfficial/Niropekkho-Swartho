"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "গ্রন্থাগার",
    description: "আমাদের গ্রন্থাগারে বিভিন্ন ধরনের বই, জার্নাল এবং শিক্ষামূলক উপকরণ পাওয়া যায়।",
    features: [
      "বিভিন্ন বিষয়ের বই",
      "শিক্ষামূলক জার্নাল",
      "কম্পিউটার ও ইন্টারনেট সুবিধা",
      "শান্তিপূর্ণ পড়ার পরিবেশ",
      "বই ধার নেওয়ার সুবিধা"
    ],
    hours: "খোলার সময়: সকাল ৯টা - বিকাল ৫টা",
    contact: "যোগাযোগ: ০১৭১১-২৩৪৫৬৭"
  },
  en: {
    title: "Library",
    description: "Our library offers various types of books, journals, and educational materials.",
    features: [
      "Books on various subjects",
      "Educational journals",
      "Computer and internet facilities",
      "Peaceful reading environment",
      "Book borrowing services"
    ],
    hours: "Opening Hours: 9:00 AM - 5:00 PM",
    contact: "Contact: 01711-234567"
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Library পেজ" : "This is Library page"}</h1>
    </div>
  );
};

export default page;
