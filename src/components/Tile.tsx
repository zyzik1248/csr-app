import { Link } from "react-router-dom";

interface Props {
  code: string;
  name: string;
}

const Tile: React.FC<Props> = ({ code, name }) => {
  return (
    <Link
      to={`/${code}`}
      className={`group w-full max-w-[500px] border-2 border-purple-600 m-2 p-4 rounded-lg hover:bg-purple-600 transition ease-in duration-300`}
    >
      <h4 className="text-xl text-gray-700 font-bold group-hover:text-white">
        {name}
      </h4>
      <p className="w-[100px] text-gray-600 group-hover:text-white">
        code : {code}
      </p>
    </Link>
  );
};

export default Tile;
