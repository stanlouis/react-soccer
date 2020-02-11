import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Our Soccer application is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Soccer application is running on port ${PORT}`);
});
