import { useEffect, RefObject } from "react";

const OutsideClick = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, onOutsideClick]);
};

export default OutsideClick;
