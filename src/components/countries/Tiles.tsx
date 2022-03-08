import { CountriesData } from "./../../graphql/graphqls";
import Tile from "./Tile";

const Tiles: React.FC<CountriesData> = ({ countries }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {countries.length > 0 ? (
        countries.map((el) => (
          <Tile key={el.code} code={el.code} name={el.name} />
        ))
      ) : (
        <p className="text-gray-600 text-lg">no results</p>
      )}
    </div>
  );
};

export default Tiles;
