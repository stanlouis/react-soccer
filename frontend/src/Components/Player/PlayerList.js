import React from 'react';

const PlayerList = ({ players, updateCurrentPlayer }) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {players.map(item => (
          <li className="collection-item" key={item._id}>
            <div>
              {item.firstName} {item.lastName}
              <a
                href="#!"
                className="secondary-content"
                onClick={() => updateCurrentPlayer(item)}
              >
                <i
                  className="far fa-futbol fa-lg black-text text-darken-4"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
