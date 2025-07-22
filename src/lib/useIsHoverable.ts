// utils/useIsHoverable.ts
import { useEffect, useState } from "react";

export function useIsHoverable() {
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    setIsHoverable(mql.matches);
  }, []);

  return isHoverable;
}
