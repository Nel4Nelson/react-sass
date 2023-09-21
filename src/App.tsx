import React, { useState } from "react";
import "./sass/main.scss";
import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Buttons/Button";
import Alert from "./components/Alerts/Alert";

const App = () => {
  const items = ["Nigeria", "Japan", "China", "Russia", "Germany"];
  const [iconToggle, setIconToggle] = useState(false);
  return (
    <>
    { iconToggle && <Alert onClicked={() => setIconToggle(false)}/> }
    <div className="container">
      <ListGroup items={items} heading="List of Countries" onClicked={(item: string) => console.log(item) } />
      <Button onClicked={() => setIconToggle(true)}>More Countries</Button>
    </div>
    </>
  );
};

export default App;
