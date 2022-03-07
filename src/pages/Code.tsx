import { useParams } from "react-router-dom";

const Country = () => {
  const params = useParams();

  return <h1 className="text-2xl font-bold">Code : {params.code}</h1>;
};

export default Country;
