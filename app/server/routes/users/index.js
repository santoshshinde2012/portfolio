import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ users: 'results' });
});

router.post('/', (req, res) => {
  res.send({ users: 'results' });
});

router.delete('/', (req, res) => {
  res.send({ users: 'results' });
});

export default router;
