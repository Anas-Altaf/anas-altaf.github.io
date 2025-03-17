import React, { useState, useEffect } from "react";

const TypingText = () => {
  const words = ["Developer", "Designer", "Freelancer", "Creator"];
  const prefix = "I am ";
  const typingSpeed = 100; // Typing speed in ms
  const deleteSpeed = 50; // Deleting speed in ms
  const pauseTime = 1000; // Pause before deleting

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h2 className="text-2xl font-bold text-center border-b-1 my-auto ">
      <span className="font-extralight">{'A '}</span>
      <span className="bg-gradient-to-r from-purple-400 to-green-400  bg-clip-text text-transparent">
      {text}
      </span>
      <span className="text-white font-light">
        {text.length === words[index].length ? " " : "_"}
      </span>
    </h2>
  );
};

export default TypingText;
