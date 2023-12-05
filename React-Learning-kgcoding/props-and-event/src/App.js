import React from "react";
import Navbar from "./component/Navbar";
import ListData from "./component/ListGroup";
import CardData from "./component/Card";
import ParentComponent from "./component/ParentComponent";

const App = () => {
  const data = [
    {
      heading: "List group item heading 1",
      day: "3 days ago",
      content: "Some placeholder content in a paragraph.",
      smalltext: "And some small print.",
    },
    {
      heading: "List group item heading 2",
      day: "3 days ago",
      content: "Some placeholder content in a paragraph.",
      smalltext: "And some small print.",
    },
    {
      heading: "List group item heading 3",
      day: "3 days ago",
      content: "Some placeholder content in a paragraph.",
      smalltext: "And some small print.",
    },
  ];
  const cardData = [
    {
      name: "Special title treatment1",
      text: "With supporting text below as a natural lead-in to additional content.",
      buttonTxt: "Go somewhere",
    },
    {
      name: "Special title treatment2",
      text: "With supporting text below as a natural lead-in to additional content.",
      buttonTxt: "Go somewhere",
    },
  ];
  return (
    <React.Fragment>
      <Navbar Title={"Navbar"} Button={"Search"} />
      <ListData items={data} />
      <CardData items={cardData} />
      <ParentComponent />
    </React.Fragment>
  );
};

export default App;
