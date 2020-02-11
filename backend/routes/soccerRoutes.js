import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID
} from '../controllers/playerControllers';

const routes = app => {
  app.route('/players').post(addNewPlayer);
  app.route('/players').get(getPlayers);
  app.route('/players/:id').get(getPlayerWithID);
};

export default routes;
