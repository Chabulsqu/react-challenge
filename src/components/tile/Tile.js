import React from "react";

export const Tile = ({ obj, deleteData }) => {
  const values = Object.values(obj);
  let counter = -1;
  const title = values[0];
  return (
    <div className="tile-container">
      {values.map(value => {
        counter++;
        if (counter === 3 || (counter === 2 && value.match(/@/))) {
          return (<React.Fragment key={counter}>
            <p className='tile'>{value}</p>
            <img src="./images/close.png" id={counter} data-title={title} onClick={deleteData} role="button" alt={`Click to delete ${values.length > 3 ? 'appointment' : 'Contact'}`}/>
          </React.Fragment>)
        }
        return <p className={counter > 0 ? 'tile' : 'tile-title'} key={counter} style={value !== '' ? {} : {color: red} }>{value !== '' ? value : '[ Deleted Contact ]'}</p>
      })}
    </div>
  );
};
