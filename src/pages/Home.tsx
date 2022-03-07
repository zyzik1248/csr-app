import { useQuery } from "react-apollo";
import { COUNTRIES, ICountries } from "../graphql/graphqls";

const Home = () => {
  const { data } = useQuery<ICountries>(COUNTRIES);

  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      {data?.countries.map((el)=><p key={el.code}>{el.code}</p>)
      }
    </div>
  );
};

export default Home;
