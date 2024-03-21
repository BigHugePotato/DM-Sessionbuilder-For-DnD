import { useState } from "react";
import style from "./Sidebar.module.css";

export function SideBar() {
  // State to manage sidebar visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={style.sidebarContainer}>
      <div
        className={`${style.sideBar} ${
          isVisible ? style.visible : style.hidden
        }`}
      >
        {isVisible && (
          <div>
            <h3>Filters</h3>
            {/* Placeholder for a slider filter */}
            <div>
              <label htmlFor="hpRange">HP Range:</label>
              <input
                type="range"
                id="hpRange"
                name="hpRange"
                min="0"
                max="300"
              />
            </div>

            {/* Placeholder for another slider filter */}
            <div>
              <label htmlFor="acRange">AC Range:</label>
              <input
                type="range"
                id="acRange"
                name="acRange"
                min="0"
                max="30"
              />
            </div>

            {/* Placeholder for a checkbox filter */}
            <div>
              <label>
                <input type="checkbox" name="hasMagic" /> Has Magic
              </label>
            </div>

            {/* Add more filters as needed */}
          </div>
        )}
      </div>
      <button onClick={toggleSidebar} className={style.toggleButton}>
        {isVisible ? "<" : ">"}
      </button>
    </div>
  );
}
