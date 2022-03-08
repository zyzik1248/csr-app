import { CountriesData } from "./../../graphql/graphqls";
import Tile from "./Tile";

const Tiles: React.FC<CountriesData> = ({ countries }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {countries.map((el) => (
        <Tile key={el.code} code={el.code} name={el.name} />
      ))}
    </div>
  );
};

export default Tiles;
