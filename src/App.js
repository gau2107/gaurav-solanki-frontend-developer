import { useEffect, useState } from "react";
import spinner from "./assets/spinner.svg";
import CapsuleCard from "./components/CapsuleCard";
import CapsuleFilter from "./components/CapsuleFilter";
import queryString from "query-string";
import Pagination from "./components/common/Pagination";
import Header from "./components/Header";
import Banner from "./components/Banner";
import DetailModal from "./components/DetailModal";
function App() {
  const initFilters = {
    limit: 10,
    offset: 0,
    type: "",
    status: "",
    original_launch_unix: "",
  };
  const getCapsules = async () => {
    setIsLoading(true);
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

    setIsLoading(false);
    return result.json();
  };

  const [filters, setFilters] = useState({ ...initFilters });
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [capDetails, setCapDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getCapsules().then((result) => {
      setData(result);
    });
  }, [filters]);

  const handleOnChange = (ev) => {
    setFilters({ ...filters, [ev.target.name]: ev.target.value });
  };

  return (
    <div className="App">
      <Header />
      <Banner />
      <CapsuleFilter filters={filters} handleOnChange={handleOnChange} />

      {isLoading ? (
        <img src={spinner} className="mt-8 w-32 mx-auto" alt="spinner" />
      ) : (
        <div className="flex flex-wrap row-gap-1 justify-evenly col-gap-1">
          {data.map((cap, index) => {
            return (
              <CapsuleCard
                data={cap}
                key={index}
                handleSelect={(data) => {
                  setCapDetails(data);
                  setIsModalOpen(true);
                }}
              />
            );
          })}
        </div>
      )}
      {!isLoading && data.length === 0 && (
        <h1 className="mx-auto text-3xl text-orange-800 font-bold uppercase my-24 text-center">
          No results found
        </h1>
      )}
      <Pagination filters={filters} setFilters={setFilters} />
      {isModalOpen && (
        <DetailModal
          toggle={() => setIsModalOpen(!isModalOpen)}
          data={capDetails}
        />
      )}
    </div>
  );
}

export default App;
