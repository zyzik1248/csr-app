import { BallTriangle } from "react-loader-spinner";
import { Country } from "./../../graphql/graphqls";
import Tile from "./Tile";

interface Props {
  data: Country[];
  loading?: boolean;
}

const Tiles: React.FC<Props> = ({ data, loading }) => {
  return (
    <div className="flex justify-center items-center flex-col mx-2">
      {data.length > 0 ? (
        data.map((el) => (
          <Tile key={el.code} code={el.code} name={el.name} />
        ))
      ) : (
        <>
          {!loading ? (
            <p className="text-gray-600 text-lg">no results</p>
          ) : (
            <BallTriangle color="orange"/>
          )}
        </>
      )}
    </div>
  );
};

export default Tiles;
