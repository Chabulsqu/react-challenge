import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({ arr }) => {
  let counter = 0;
  return (
    <div>
      {arr.map(object => {
        counter++;
        return <Tile obj={object} key={counter} />
      })}
    </div>
  );
};
