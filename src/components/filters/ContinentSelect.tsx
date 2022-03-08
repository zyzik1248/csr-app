import { useState } from "react";
import { useQuery } from "react-apollo";
import Select from "react-select";

import { CONTINENTS, ContinentsData } from "../../graphql/graphqls";

interface Props{
  setContinent: (continent: string) => void
}

const ContinentSelect: React.FC<Props> = ({setContinent}) => {
  const { data } = useQuery<ContinentsData>(CONTINENTS);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    e?.value ? setContinent(e.value) : setContinent("");
    e?.value ? setValue(e) : setValue("");
  };
  return (
    <Select
      className="flex-1 min-w-[250px]"
      isClearable={true}
      options={
        data?.continents.map((el) => {
          return { value: el.code, label: el.name };
        }) as any
      }
      onChange={handleChange}
      value={value}
    />
  );
};

export default ContinentSelect;
