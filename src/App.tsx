import Button from "./Button";
import ListGroup from "./Components/ListGroup";

function App(){
  const items = ["Tehran", "Shiraz", "Isfahan"];
  const handleSelectItem = (item: string) => {console.log(item);};
  return <><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  <Button onClick={() => {}}>This is the child content</Button>
  <Button colorClass="danger" onClick={() => {}}>This is the child content</Button>
  </>

}

export default App;