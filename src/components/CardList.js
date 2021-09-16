import Card from "./Card";

const CardList = ({ robots, index }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardList;
