import { useState } from "react";
import { useQuery } from "react-apollo";

import Tiles from "../components/countries/Tiles";
import Filters from "../components/filters/Filters";
import { COUNTRIES, CountriesData, CountriesVar } from "../graphql/graphqls";

const Home = () => {
  const [continent, setContinent] = useState("");
  const [name, setName] = useState("");
  const { data, loading } = useQuery<CountriesData, CountriesVar>(COUNTRIES, {
    variables: { continent },
  });

  return (
    <div>
      <Filters setContinent={setContinent} setName={setName} />
      <div className="pt-[100px]">
        <Tiles
          loading={loading}
          data={
            data?.countries.filter((el) =>
              el.name.toLowerCase().match(name.toLowerCase())
            ) || []
          }
        />
      </div>
    </div>
  );
};

export default Home;
