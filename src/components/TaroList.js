import ToggleImages from "./components/ToggleImages";

const TaroList = ({taros}) => {
  return (
    <div className="taro-list">
        {
          taros.map((item) => (
            <div className="taro-item" key={item.id}>
              <ToggleImages Item={item}/>
            </div>
        ))}
    </div>
  );
}

export default TaroList;


