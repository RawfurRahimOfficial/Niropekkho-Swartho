"use client";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const page = () => {
  const { lang } = useLanguage();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{lang === "bn" ? "এটি Contact পেজ" : "This is Contact page"}</h1>
    </div>
  );
};

export default page;