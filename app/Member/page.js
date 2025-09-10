"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "আমাদের সদস্যবৃন্দ",
    description: "আমাদের সংগঠনের নিবেদিত সদস্যদের সাথে পরিচিত হোন।",
    members: [
      {
        name: "মোঃ আবুল কালাম",
        position: "সভাপতি",
        description: "১০ বছরের অভিজ্ঞতা সহ সমাজসেবী",
        image: "👨‍💼"
      },
      {
        name: "ডাঃ ফাতেমা খাতুন",
        position: "সহ-সভাপতি",
        description: "চিকিৎসা ক্ষেত্রে বিশেষজ্ঞ",
        image: "👩‍⚕️"
      },
      {
        name: "মোঃ রফিকুল ইসলাম",
        position: "সাধারণ সম্পাদক",
        description: "শিক্ষা ও প্রশাসনিক ক্ষেত্রে অভিজ্ঞ",
        image: "👨‍🏫"
      },
      {
        name: "সালমা বেগম",
        position: "কোষাধ্যক্ষ",
        description: "অর্থ ব্যবস্থাপনায় দক্ষ",
        image: "👩‍💼"
      },
      {
        name: "মোঃ করিম উদ্দিন",
        position: "সাংগঠনিক সম্পাদক",
        description: "যুব উন্নয়নে বিশেষজ্ঞ",
        image: "👨‍🎓"
      },
      {
        name: "নাসিরা আক্তার",
        position: "সাংস্কৃতিক সম্পাদক",
        description: "সাংস্কৃতিক কর্মকাণ্ডে নেতৃত্ব",
        image: "👩‍🎨"
      }
    ],
    stats: {
      totalMembers: "মোট সদস্য",
      activeMembers: "সক্রিয় সদস্য",
      yearsOfService: "সেবার বছর"
    }
  },
  en: {
    title: "Our Members",
    description: "Meet our dedicated team of professionals and volunteers.",
    members: [
      {
        name: "Mr. Abul Kalam",
        position: "President",
        description: "Social worker with 10 years of experience",
        image: "👨‍💼"
      },
      {
        name: "Dr. Fatema Khatun",
        position: "Vice President",
        description: "Specialist in medical field",
        image: "👩‍⚕️"
      },
      {
        name: "Mr. Rafiqul Islam",
        position: "General Secretary",
        description: "Experienced in education and administration",
        image: "👨‍🏫"
      },
      {
        name: "Salma Begum",
        position: "Treasurer",
        description: "Expert in financial management",
        image: "👩‍💼"
      },
      {
        name: "Mr. Karim Uddin",
        position: "Organizing Secretary",
        description: "Specialist in youth development",
        image: "👨‍🎓"
      },
      {
        name: "Nasira Akter",
        position: "Cultural Secretary",
        description: "Leader in cultural activities",
        image: "👩‍🎨"
      }
    ],
    stats: {
      totalMembers: "Total Members",
      activeMembers: "Active Members",
      yearsOfService: "Years of Service"
    }
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Member পেজ" : "This is Member page"}</h1>
    </div>
  );
};

export default page;
