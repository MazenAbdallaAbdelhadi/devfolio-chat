import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export function useAnimatedText(text: string) {
  const animatedCursor = useMotionValue(0);
  const [cursor, setCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);
  const [isSameText, setIsSameText] = useState(true);

  if (prevText !== text) {
    setPrevText(text);
    setIsSameText(text.startsWith(prevText));

    if (!text.startsWith(prevText)) {
      setCursor(0);
    }
  }

  useEffect(() => {
    if (!isSameText) {
      animatedCursor.jump(0);
    }

    const controls = animate(animatedCursor, text.length, {
      duration: 2,
      ease: "linear",
      onUpdate: (latest) => {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [animatedCursor, isSameText, text.length]);

  return text.slice(0, cursor);
}
