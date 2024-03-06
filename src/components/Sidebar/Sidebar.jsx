import style from "./Sidebar.module.css";
import { useSearchStore } from "../../stores/Search-Store";

export function SideBar() {
  const { filters, setFilter } = useSearchStore((state) => ({
    filters: state.filters,
    setFilter: state.setFilter,
  }));

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilter(name, checked);
  };

  return (
    <div className={style.sideBar}>
      {Object.entries(filters).map(([filterName, value]) => (
        <label key={filterName}>
          <input
            type="checkbox"
            name="filterName"
            checked={value}
            onChange={handleChange}
          />
          {filterName}
        </label>
      ))}
    </div>
  );
}
