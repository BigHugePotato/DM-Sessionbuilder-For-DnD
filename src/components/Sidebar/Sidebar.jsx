import { useState } from "react";
import style from "./Sidebar.module.css";
import { useSearchStore } from "../../stores/Search-Store";

export function SideBar() {
  // State to manage sidebar visibility
  const [isVisible, setIsVisible] = useState(true);
  const setFilter = useSearchStore((state) => state.setFilter);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    const filterValue = type === "checkbox" ? checked : value;
    setFilter(name, filterValue);
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
              <label htmlFor="hpRange">HP Range:</label>
              <input
                type="range"
                id="hpRange"
                name="hpRange"
                min="0"
                max="300"
                onChange={handleFilterChange}
              />
            </div>

            {/* Slider for AC Range */}
            <div>
              <label htmlFor="acRange">AC Range:</label>
              <input
                type="range"
                id="acRange"
                name="acRange"
                min="0"
                max="30"
                onChange={handleFilterChange}
              />
            </div>

            {/* Checkbox for Has Magic */}
            <div>
              <label>
                <input
                  type="checkbox"
                  name="hasMagic"
                  onChange={handleFilterChange}
                />{" "}
                Has Magic
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
