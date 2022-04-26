import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../App.css";
import Points from "./Points";

function DragDrop() {
  const [pointPlace, setPointPlace] = useState([...Array(162).keys()]);
  const [selectedPoints, setSelectedPoints] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => addPoints(item.id, monitor),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addPoints = (id, monitor) => {
    console.log(id, monitor);
    setSelectedPoints((selectedPoints) => [...selectedPoints, pointPlace[id]]);
  };

  return (
    <>
      <div className="Pictures" ref={drop}>
        {pointPlace.map((point, index) => {
          return <Points key={index} id={index} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {selectedPoints.map((point, index) => {
          return <Points key={point} id={point} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
