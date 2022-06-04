import "./styles.css";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  //This is still Hard Coded data from the Data.js file ;-)
  const dataComp = Data.map((data) => {
    return <Card key={data.id} title={data.title} />;
  });


  
  return (
    <div className="App">
      <h2>Top Most Expensive Cars in the World</h2>
      <p>{dataComp}</p>
    </div>
  );
}
