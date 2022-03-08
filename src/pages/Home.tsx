import { useState } from "react";
import { useQuery } from "react-apollo";

import Tiles from "../components/countries/Tiles";
import Filters from "../components/filters/Filters";
import { COUNTRIES, CountriesData, CountriesVar } from "../graphql/graphqls";

const Home = () => {
  const [continent, setContinent] = useState("");
  const [name, setName] = useState("");
  const { data } = useQuery<CountriesData, CountriesVar>(COUNTRIES, {
    variables: { continent },
  });

  return (
    <div>
      <Filters setContinent={setContinent} setName={setName} />
      <div className="pt-[100px]">
        <Tiles
          countries={data?.countries.filter((el) => el.name.match(name)) || []}
        />
      </div>
    </div>
  );
};

export default Home;
