import { useQuery } from "react-apollo";
import { useParams } from "react-router-dom";
import CountryInfo from "../components/country/CountryInfo";
import { COUNTRY, CountryData, CountryVar } from "../graphql/graphqls";

const Country = () => {
  const params = useParams();
  const { data } = useQuery<CountryData, CountryVar>(COUNTRY, {
    variables: { code: params.code || "" },
  });

  return (
    <div className="flex justify-center items-center">
      {data?.country && (
        <CountryInfo
          code={data.country.code}
          emoij={data.country.emoji}
          languagesName={[...data.country.languages]}
          name={data.country.name}
        />
      )}
    </div>
  );
};

export default Country;
