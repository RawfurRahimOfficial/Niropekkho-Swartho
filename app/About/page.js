"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const texts = {
  bn: {
    title: "আমাদের সম্পর্কে",
    description: "আমাদের ওয়েবসাইটে স্বাগতম। আমরা সর্বোত্তম সেবা প্রদানের জন্য নিবেদিত।"
  },
  en: {
    title: "About Us",
    description: "Welcome to our website. We are dedicated to providing the best service possible."
  }
};

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি About পেজ" : "This is About page"}</h1>
    </div>
  );
};

export default page;
