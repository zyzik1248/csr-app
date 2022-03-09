import { useQuery } from "react-apollo";
import { BallTriangle } from "react-loader-spinner";
import { Navigate, useParams } from "react-router-dom";

import CountryInfo from "../components/country/CountryInfo";
import { COUNTRY, CountryData, CountryVar } from "../graphql/graphqls";

const Country = () => {
  const params = useParams();
  const { loading, data } = useQuery<CountryData, CountryVar>(COUNTRY, {
    variables: { code: params.code?.toUpperCase() || "" },
  });

  return (
    <div className="flex justify-center items-center mt-8">
      {!loading && !data?.country && <Navigate to="/404" />}
      {!loading && data?.country ? (
        <CountryInfo
          code={data.country.code}
          emoij={data.country.emoji}
          languagesName={[...data.country.languages]}
          name={data.country.name}
        />
      ) : (
        <BallTriangle color="orange" />
      )}
    </div>
  );
};

export default Country;
