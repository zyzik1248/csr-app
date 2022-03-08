import ContinentSelect from "./ContinentSelect";
import NameSearcher from "./NameSearcher";

interface Props {
  setContinent: (continent: string) => void;
  setName: (name: string) => void;
}

const Filters: React.FC<Props> = ({ setContinent, setName }) => {
  return (
    <div className="fixed w-full flex flex-wrap p-3 gap-2 bg-white">
      <ContinentSelect setContinent={setContinent} />
      <NameSearcher setName={setName} />
    </div>
  );
};

export default Filters;
