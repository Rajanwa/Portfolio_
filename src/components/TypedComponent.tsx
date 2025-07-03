import React, { useState, useEffect } from 'react';

interface TypedComponentProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  startDelay?: number;
  backDelay?: number;
}

const TypedComponent: React.FC<TypedComponentProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  startDelay = 0,
  backDelay = 2000,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentStringIndex];
    
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, backDelay);
      return () => clearTimeout(timer);
    }

    const speed = isDeleting ? backSpeed : typeSpeed;
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        
        if (currentText.length === 1) {
          setIsDeleting(false);
          if (loop || currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prevIndex) => 
              prevIndex === strings.length - 1 ? 0 : prevIndex + 1
            );
          }
        }
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        
        if (currentText.length === currentString.length - 1) {
          if (loop || currentStringIndex < strings.length - 1) {
            setIsWaiting(true);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isWaiting, currentStringIndex, strings, typeSpeed, backSpeed, loop, backDelay]);

  useEffect(() => {
    if (startDelay > 0) {
      const timer = setTimeout(() => {
        // Start typing after delay
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [startDelay]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-primary-400">|</span>
    </span>
  );
};

export default TypedComponent;