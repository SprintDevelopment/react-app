import ListGroup from "./Components/ListGroup";

function App(){
  const items = ["Tehran", "Shiraz", "Isfahan"];
  const handleSelectItem = (item: string) => {console.log(item);};
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;