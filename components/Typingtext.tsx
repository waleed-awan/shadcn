"use client";

import { useEffect, useState } from "react";

const words = ["Artificial intellifence", "Vibe Coders", "IndieHackers", "Founders","Solopreneurs","Startups"];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    let timeout: NodeJS.Timeout;

    if (!deleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 120);
    } 
    else if (!deleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } 
    else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 60);
    } 
    else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <p className="mt-6 text-xl text-gray-400">
      Tailored for{" "}
      <span className="font-medium  text-black">
        {words[index].substring(0, subIndex)}
      </span>

      <span className="animate-pulse">|</span>
    </p>
  );
}