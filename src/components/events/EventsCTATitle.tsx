"use client";

import React from "react";
import TextType from "@/components/ui/TextType";

export default function EventsCTATitle() {
  return (
    <TextType
      as="h2"
      text="Let's Plan Your Next Celebration"
      className="font-serif font-bold text-3xl sm:text-5xl text-white inline-block"
      typingSpeed={75}
      pauseDuration={2000}
      deletingSpeed={40}
      loop={true}
      showCursor={true}
      cursorStyle="underscore"
      cursorColor="#C5A46D"
      cursorGlide={true}
      startOnVisible={true}
    />
  );
}

