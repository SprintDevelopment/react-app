import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Tehran", "Shiraz", "Darab"];
  const handleClick = (e : MouseEvent) => console.log(e.target);
  return (
    <>
      <h1>Cities</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            onClick={handleClick}
            className="list-group-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
