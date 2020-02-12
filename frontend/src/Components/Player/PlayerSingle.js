import React from 'react';

const PlayerSingle = ({selectedPlayer}) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpeg" alt="Soccer image" />
            <span className="card-title">
              {selectedPlayer.firstName} {selectedPlayer.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {selectedPlayer.phone} - Email: {selectedPlayer.email}
            </p>
            <p>
              Strength: {selectedPlayer.strength} - Endurance:{' '}
              {selectedPlayer.endurance}
            </p>
          </div>
          <div className="card-action">Team: {selectedPlayer.team}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
