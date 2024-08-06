import { useSearchParams } from "react-router-dom";

const MEMBERS = [
  { name: "Miyeon", element: "air" },
  { name: "Minnie", element: "air" },
  { name: "Soojin", element: "water" },
  { name: "Soyeon", element: "earth" },
  { name: "Yuqi", element: "earth" },
  { name: "Shuhua", element: "earth" },
];

const FilterList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    searchText: "",
    onlyEarthSigns: "false",
  });
  const searchText = searchParams.get("searchText");
  const onlyEarthSigns = searchParams.get("onlyEarthSigns") === "true";

  const setParameter = (parameter: string, value: string | boolean) => {
    setSearchParams(
      (prev) => {
        prev.set(parameter, value.toString());
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="member">Member</label>
        <input
          type="text"
          title="member"
          value={searchText || ""}
          onChange={(event) =>
            setParameter("searchText", event.target.value || "")
          }
        />
      </div>
      <div>
        <label htmlFor="check">Only earth signs</label>
        <input
          type="checkbox"
          title="check"
          checked={onlyEarthSigns}
          onChange={(event) =>
            setParameter("onlyEarthSigns", event.target.checked)
          }
        />
      </div>
      <div>
        <ul>
          {MEMBERS.map((member) => {
            return searchText === "" ||
              (searchText !== "" &&
                member.name.toLowerCase().includes(searchText!) &&
                (onlyEarthSigns === false ||
                  (onlyEarthSigns === true && member.element === "earth"))) ||
              (onlyEarthSigns === true &&
                member.element === "earth" &&
                ((searchText !== "" &&
                  member.name.toLowerCase().includes(searchText!)) ||
                  searchText === "")) ? (
              <li key={member.name}>{member.name}</li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
