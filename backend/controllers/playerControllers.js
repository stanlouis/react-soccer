import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
  const newPlayer = new Player(req.body);

  newPlayer
    .save()
    .then(() => res.status(201).send(newPlayer))
    .catch(e => res.status(400).send(e));
};
export const getPlayers = (req, res) => {
  Player.find({})
    .then(players => res.send(players))
    .catch(e => res.status(500).send(e));
};
export const getPlayerWithID = (req, res) => {
  const { id } = req.params;
  Player.findById(id)
    .then(player => {
      if (!player) return res.status(400).send();
      return res.send(player);
    })
    .catch(e => res.status(500).send(e));
};

export const updatePlayer = (req, res) => {
  const { id } = req.params;
  Player.findByIdAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    (err, Player) => {
      if (err) res.send(err);
      res.json(Player);
    }
  );
};
