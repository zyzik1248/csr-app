import ContinentSelect from "./ContinentSelect";

interface Props{
  setContinent: (continent: string) => void
}

const Filters:React.FC<Props> = ({setContinent}) => {

  return (
    <div className="fixed w-full flex p-3 gap-2 bg-white">
      <ContinentSelect setContinent={setContinent}/>
      <input
        className="flex-1 p-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
        type="search"
      />
    </div>
  );
};

export default Filters;
