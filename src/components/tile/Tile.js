import React from "react";

export const Tile = ({ obj }) => {
  const values = Object.values(obj);
  let counter = -1;
  return (
    <div className="tile-container">
      {values.map(value => {
        counter++;
        return <p className={counter > 0 ? 'tile' : 'tile-title'} key={counter}>{value}</p>
      })}
    </div>
  );
};
