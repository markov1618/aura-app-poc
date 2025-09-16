import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Aura backend!');
});

app.listen(4000, () => {
  console.log('✅ Server listening on http://localhost:4000');
});
