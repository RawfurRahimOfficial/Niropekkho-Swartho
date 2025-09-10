"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "কম্পিউটার প্রশিক্ষণ কেন্দ্র",
    description: "আধুনিক কম্পিউটার শিক্ষার জন্য আমাদের প্রশিক্ষণ কেন্দ্রে যোগ দিন।",
    courses: [
      {
        name: "বেসিক কম্পিউটার",
        duration: "৩ মাস",
        description: "কম্পিউটারের মৌলিক বিষয়সমূহ শিখুন"
      },
      {
        name: "মাইক্রোসফট অফিস",
        duration: "২ মাস",
        description: "Word, Excel, PowerPoint এর ব্যবহার"
      },
      {
        name: "গ্রাফিক্স ডিজাইন",
        duration: "৪ মাস",
        description: "Photoshop, Illustrator এর মাধ্যমে ডিজাইন"
      },
      {
        name: "ওয়েব ডেভেলপমেন্ট",
        duration: "৬ মাস",
        description: "HTML, CSS, JavaScript শিখুন"
      }
    ],
    features: [
      "আধুনিক কম্পিউটার ল্যাব",
      "অভিজ্ঞ প্রশিক্ষক",
      "প্র্যাকটিক্যাল ট্রেনিং",
      "সার্টিফিকেট প্রদান",
      "চাকরির সহায়তা"
    ],
    contact: "যোগাযোগ: ০১৭১১-২৩৪৫৬৭"
  },
  en: {
    title: "Computer Training Center",
    description: "Join our training center for modern computer education.",
    courses: [
      {
        name: "Basic Computer",
        duration: "3 months",
        description: "Learn fundamental computer concepts"
      },
      {
        name: "Microsoft Office",
        duration: "2 months",
        description: "Learn Word, Excel, PowerPoint"
      },
      {
        name: "Graphics Design",
        duration: "4 months",
        description: "Design with Photoshop, Illustrator"
      },
      {
        name: "Web Development",
        duration: "6 months",
        description: "Learn HTML, CSS, JavaScript"
      }
    ],
    features: [
      "Modern computer lab",
      "Experienced trainers",
      "Practical training",
      "Certificate provided",
      "Job assistance"
    ],
    contact: "Contact: 01711-234567"
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Training পেজ" : "This is Training page"}</h1>
    </div>
  );
};

export default page;
