import express from 'express';

const app = express();

//indica para o express ler o body com json
app.use(express.json())

//mock
const teams =[
    {id: 1 , team: 'Brasil', group: 'G'},
    {id: 2 , team: 'Argentina', group: 'A'},
    {id: 3 , team: 'França', group: 'D'},
    {id: 4 , team: 'Portugal', group: 'H'},
]

// rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Deu certo, ok!');
});

app.get('/teams', (req, res) => {
  res.status(200).send(teams);
});
app.post('/teams', (req, res) => {
  teams.push(req.body)
  res.status(201).send('Team add successful')
});

export default app;
