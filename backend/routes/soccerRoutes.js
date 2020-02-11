import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer
} from '../controllers/playerControllers';

const routes = app => {
  app
    .route('/players')
    .post(addNewPlayer)
    .get(getPlayers);
  app
    .route('/players/:id')
    .get(getPlayerWithID)
    .put(updatePlayer);
};

export default routes;
