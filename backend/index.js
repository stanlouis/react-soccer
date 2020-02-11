import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes/soccerRoutes';

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4500;

// mongo connection
mongoose
  .connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to mongoDB'));

routes(app);

app.get('/', (req, res) => {
  res.send(`Our Soccer application is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Soccer application is running on port ${PORT}`);
});
