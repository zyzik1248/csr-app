interface Props {
  name: string;
  code: string;
  emoij: string;
  languagesName: { name: string }[];
}

const CountryInfo: React.FC<Props> = ({ name, code, emoij, languagesName }) => {
  return (
    <div className="border-2 w-full max-w-[500px] border-purple-600 m-2 p-4 rounded-lg">
      <h4 className="text-xl text-gray-700 font-bold mb-4">{name}</h4>
      <div className="flex ml-4 text-gray-600">
        <div className="min-w-[100px]">
          <p>code : </p>
          <p>emoij :</p>
          <p>Languages : </p>
        </div>
        <div className="text-gray-600">
          <p>{code}</p>
          <p>{emoij}</p>
          <div className="flex gap-1">
            {languagesName.map((el, index) => (
              <p key={el.name} className="text-gray-600">
                {el.name}
                {index + 1 < languagesName.length && ","}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
