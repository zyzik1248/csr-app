import { useQuery } from "react-apollo";
import Tiles from "../components/countries/Tiles";
import { COUNTRIES, ICountries } from "../graphql/graphqls";

const Home = () => {
  const { data } = useQuery<ICountries>(COUNTRIES);

  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <Tiles countries={data?.countries || []}/>
    </div>
  );
};

export default Home;
