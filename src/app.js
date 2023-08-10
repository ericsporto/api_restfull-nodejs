import express from 'express';
import connection from '../infra/connection.js';

const app = express();

//indica para o express ler o body com json
app.use(express.json());

//função que filtra por Id
const searchTeamById = (id) => {
  return teams.find((team) => team.id == id);
};

//função que deleta por Id
const deleteTeamById = (id) => {
  return teams.findIndex((team) => team.id == id);
};

//ROTAS
//lista os times
app.get('/teams', (req, res) => {
  const sql = 'SELECT * FROM teams;';
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

//filtra o time por id
app.get('/teams/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM teams WHERE id=?;';
  connection.query(sql, id, (error, result) => {
    const line = result[0];
    if (error) {
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(line);
    }
  });
});

//adiciona um time na lista
app.post('/teams', (req, res) => {
  const team = req.body;
  const sql = 'INSERT INTO teams SET ?;';
  connection.query(sql, team, (error, result) => {
    if (error) {
      res.status(400).json({ error: error });
    } else {
      res.status(201).json(result);
    }
  });
});

//deleta um time da lista por id
app.delete('/teams/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM teams WHERE id=?;';
  connection.query(sql, id, (error, result) => {
    if (error) {
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

//edita um time por id
app.put('/teams/:id', (req, res) => {
  const id = req.params.id;
  const team = req.body;
  const sql = 'UPDATE teams SET ? WHERE id=?;';
  connection.query(sql, [team, id], (error, result) => {
    if (error) {
      res.status(400).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

export default app;
