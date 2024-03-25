import { useState } from "react";
import style from "./Sidebar.module.css";
import { useSearchStore } from "../../stores/Search-Store";
import { initialFilterState } from "../../assets/filters";

export function SideBar() {
  // State to manage sidebar visibility
  const [isVisible, setIsVisible] = useState(true);
  const [crRange, setCrRange] = useState(initialFilterState.crRange);
  const applyFilters = useSearchStore((state) => state.applyFilters);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  
  const handleApplyFilters = () => {
    applyFilters(crRange); // Pass crRange to applyFilters
  };

  const handleCrMinChange = (event) => {
    setCrRange((prev) => ({ ...prev, min: parseInt(event.target.value, 10) }));
  };

  const handleCrMaxChange = (event) => {
    setCrRange((prev) => ({ ...prev, max: parseInt(event.target.value, 10) }));
  };


  // const handleFilterChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const filterValue = type === "checkbox" ? checked : parseInt(value, 10);
  //   setFilter(name, filterValue);
  // };

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
              <label htmlFor="crMin">CR Min: {crRange.min}</label>
              <input
                type="range"
                id="crMin"
                min="0"
                max="30"
                value={crRange.min}
                onChange={handleCrMinChange}
              />
            </div>
            <div>
              <label htmlFor="crMax">CR Max: {crRange.max}</label>
              <input
                type="range"
                id="crMax"
                min="0"
                max="30"
                value={crRange.max}
                onChange={handleCrMaxChange}
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
