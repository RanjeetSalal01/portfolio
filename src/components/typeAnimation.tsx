"use client";
import { useState, useEffect } from "react";

const TypingAnimation = ({ texts }: any) => {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return; // Stop if all texts are processed

    const currentText = texts[currentTextIndex];

    if (currentCharIndex < currentText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedTexts((prevTexts) => {
          const newTexts: any = [...prevTexts];
          newTexts[currentTextIndex] =
            (newTexts[currentTextIndex] || "") + currentText[currentCharIndex];
          return newTexts;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, 150);

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentCharIndex(0);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [texts, currentTextIndex, currentCharIndex]);

  return (
    // <div>
    <>
      {displayedTexts.map((text, index) => (
        <pre
          className="typing"
          key={index}
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          {text}
        </pre>
      ))}
    </>
    // </div>
  );
};

export default TypingAnimation;
