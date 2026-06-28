import { useEffect, useState } from "react";

export default function useTypewriter(words: string[], speed = 75, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((value) => value + 1);
        } else if (!deleting && subIndex === current.length) {
          setDeleting(true);
        } else if (deleting && subIndex > 0) {
          setSubIndex((value) => value - 1);
        } else {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
        }
      },
      deleting ? speed / 2 : subIndex === current.length ? pause : speed
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, pause, speed, subIndex, words]);

  return words[index % words.length].slice(0, subIndex);
}
