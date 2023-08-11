import express from 'express';
import TeamController from './app/controllers/TeamController.js';

const app = express();

//indica para o express ler o body com json
app.use(express.json());

//ROTAS
app.get('/teams', TeamController.index);
app.get('/teams/:id', TeamController.show);
app.post('/teams', TeamController.store);
app.put('/teams/:id', TeamController.update);
app.delete('/teams/:id', TeamController.delete);

export default app;
