import React from "react";
import { useDrag } from "react-dnd";

function Points({ id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="points"
      ref={drag}
      width="150px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    >
      {id}
    </div>
  );
}

export default Points;
