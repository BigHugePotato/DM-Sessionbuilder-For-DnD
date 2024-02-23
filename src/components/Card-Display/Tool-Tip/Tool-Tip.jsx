import { useState } from "react";
import style from "./Tool-Tip.module.css"; // Assuming you have CSS for the tooltip

export const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={style.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className={style.tooltipContent}>{content}</div>}
    </div>
  );
};
