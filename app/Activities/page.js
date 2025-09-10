"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "আমাদের কার্যক্রম",
    description: "আমাদের সংগঠনের বিভিন্ন কার্যক্রম ও অনুষ্ঠান সম্পর্কে জানুন।",
    activities: [
      {
        title: "শিক্ষামূলক কর্মশালা",
        description: "বিভিন্ন বিষয়ে শিক্ষামূলক কর্মশালার আয়োজন করা হয়।",
        icon: "📚"
      },
      {
        title: "সামাজিক সেবা",
        description: "সমাজের বিভিন্ন শ্রেণীর মানুষের জন্য সেবামূলক কার্যক্রম।",
        icon: "🤝"
      },
      {
        title: "সাংস্কৃতিক অনুষ্ঠান",
        description: "বাংলা সংস্কৃতি ও ঐতিহ্য রক্ষার জন্য সাংস্কৃতিক অনুষ্ঠান।",
        icon: "🎭"
      },
      {
        title: "স্বাস্থ্য সচেতনতা",
        description: "সুস্থ জীবনযাপনের জন্য স্বাস্থ্য সচেতনতা কর্মসূচি।",
        icon: "🏥"
      },
      {
        title: "পরিবেশ সুরক্ষা",
        description: "পরিবেশ রক্ষা ও সবুজায়নের জন্য বিভিন্ন কার্যক্রম।",
        icon: "🌱"
      },
      {
        title: "যুব উন্নয়ন",
        description: "যুব সমাজের দক্ষতা উন্নয়নের জন্য প্রশিক্ষণ কর্মসূচি।",
        icon: "👥"
      }
    ]
  },
  en: {
    title: "Our Activities",
    description: "Learn about the various activities and events organized by our organization.",
    activities: [
      {
        title: "Educational Workshops",
        description: "We organize educational workshops on various topics.",
        icon: "📚"
      },
      {
        title: "Social Service",
        description: "Community service activities for people from all walks of life.",
        icon: "🤝"
      },
      {
        title: "Cultural Events",
        description: "Cultural events to preserve Bengali culture and heritage.",
        icon: "🎭"
      },
      {
        title: "Health Awareness",
        description: "Health awareness programs for healthy living.",
        icon: "🏥"
      },
      {
        title: "Environmental Protection",
        description: "Various activities for environmental protection and greening.",
        icon: "🌱"
      },
      {
        title: "Youth Development",
        description: "Training programs for youth skill development.",
        icon: "👥"
      }
    ]
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Activities পেজ" : "This is Activities page"}</h1>
    </div>
  );
};

export default page;
