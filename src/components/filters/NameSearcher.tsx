import debonce from "lodash.debounce";

interface Props {
  setName: (name: string) => void;
}

const NameSearcher: React.FC<Props> = ({ setName }) => {
  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const debonceChange = debonce(handleChange, 300);

  return (
    <input
      className="flex-1 p-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
      type="search"
      onChange={debonceChange}
    />
  );
};

export default NameSearcher;
