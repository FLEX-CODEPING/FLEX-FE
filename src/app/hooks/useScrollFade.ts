import { useEffect, useRef, useState } from 'react';

interface ScrollState {
  isAtStart: boolean;
  isAtEnd: boolean;
}

export const useScrollFade = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    isAtStart: true,
    isAtEnd: false,
  });

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollState({
      isAtStart: scrollLeft === 0,
      isAtEnd: scrollLeft + clientWidth >= scrollWidth,
    });
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollRef, scrollState };
};
