"use client";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "যুক্ত হোন",
    description: "আমাদের সংগঠনের সদস্য হয়ে সমাজের উন্নয়নে অংশ নিন।",
    form: {
      name: "নাম",
      email: "ইমেইল",
      phone: "ফোন নম্বর",
      address: "ঠিকানা",
      occupation: "পেশা",
      interest: "আগ্রহের বিষয়",
      message: "বার্তা",
      submit: "আবেদন জমা দিন"
    },
    benefits: [
      "সমাজসেবার সুযোগ",
      "নেটওয়ার্কিং",
      "শিক্ষামূলক কার্যক্রম",
      "সাংস্কৃতিক অনুষ্ঠান",
      "ক্যারিয়ার উন্নয়ন"
    ],
    requirements: [
      "বয়স ১৮ বছরের বেশি",
      "সুচরিত্রের অধিকারী",
      "সমাজসেবার আগ্রহ",
      "নিয়মিত সভায় অংশগ্রহণ"
    ]
  },
  en: {
    title: "Join Us",
    description: "Become a member of our organization and contribute to social development.",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone Number",
      address: "Address",
      occupation: "Occupation",
      interest: "Area of Interest",
      message: "Message",
      submit: "Submit Application"
    },
    benefits: [
      "Community service opportunities",
      "Networking",
      "Educational programs",
      "Cultural events",
      "Career development"
    ],
    requirements: [
      "Age above 18 years",
      "Good character",
      "Interest in community service",
      "Regular meeting participation"
    ]
  }
};

const page = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === "bn" ? "আবেদন জমা দেওয়া হয়েছে!" : "Application submitted!");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Join পেজ" : "This is Join page"}</h1>
    </div>
  );
};

export default page;
