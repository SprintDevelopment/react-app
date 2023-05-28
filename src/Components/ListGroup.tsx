import { useState } from "react";
interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item)}} className={ index === selectedIndex ? 'list-group-item active' : 'list-group-item'}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
