import { useState } from "react";
import { useQuery } from "react-query";
import spinner from "./assets/spinner.svg";
import CapsuleCard from "./components/CapsuleCard";
import CapsuleFilter from "./components/CapsuleFilter";
import queryString from "query-string";
import Pagination from "./components/common/Pagination";
function App() {
  const initFilters = {
    limit: 10,
    offset: 0,
    type: "",
    status: "",
    original_launch_unix: "",
  };
  const getCapsules = async () => {
    let tempFilters = {
      ...filters,
      original_launch_unix: filters.original_launch_unix
        ? Math.floor(new Date(filters.original_launch_unix).getTime() / 1000)
        : "",
    };

    const qs = queryString.stringify(
      { ...tempFilters },
      { skipEmptyString: true }
    );

    const result = await fetch(`https://api.spacexdata.com/v3/capsules?${qs}`);
    return result.json();
  };

  const { data, isLoading } = useQuery("capsules", getCapsules);

  const [filters, setFilters] = useState({ ...initFilters });

  const handleOnChange = (ev) => {
    setFilters({ ...filters, [ev.target.name]: ev.target.value });
  };

  return (
    <div className="App">
      <CapsuleFilter filters={filters} handleOnChange={handleOnChange} />
      {isLoading ? (
        <img src={spinner} className="App-logo" alt="logo" />
      ) : (
        <div>
          {data.map((cap, index) => {
            return <CapsuleCard data={cap} key={index} />;
          })}

          <Pagination filters={filters} setFilters={setFilters} />
        </div>
      )}
    </div>
  );
}

export default App;
