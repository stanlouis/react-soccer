import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer
} from '../controllers/playerControllers';

const routes = app => {
  app
    .route('/players')
    .post(addNewPlayer)
    .get(getPlayers);
  app
    .route('/players/:id')
    .get(getPlayerWithID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
