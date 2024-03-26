import { useState } from "react";
import style from "./Sidebar.module.css";
import { initialFilterState } from "../../assets/filters";
import { useFilterStore } from "../../stores/Filter-Store";

export function SideBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [crValue, setCrValue] = useState(initialFilterState.crValue); // Single CR value

  const applyFilters = useFilterStore((state) => state.applyFilters);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const handleApplyFilters = () => {
    console.log("Applying filters from Sidebar with CR value:", crValue);
    applyFilters(crValue); // Trigger data fetching with the selected CR value
  };

  const handleCrChange = (event) => {
    setCrValue(parseInt(event.target.value, 10)); // Update the CR value
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
            {/* Slider for HP Range */}
            <div>
              <label htmlFor="crValue">CR: {crValue}</label>
              <input
                type="range"
                id="crValue"
                min="0"
                max="30"
                value={crValue ?? 1}
                onChange={handleCrChange}
              />
            </div>
          </div>
        )}
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
      <button onClick={toggleSidebar} className={style.toggleButton}>
        {isVisible ? "<" : ">"}
      </button>
    </div>
  );
}
