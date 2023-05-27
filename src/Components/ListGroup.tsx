function ListGroup() {
  const items = ["Tehran", "Shiraz", "Darab"];
  return (
    <>
      <h1>Cities</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
