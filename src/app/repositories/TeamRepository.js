import { consult } from '../database/connection.js';

class TeamRepository {
  create(team) {
    const sql = 'INSERT INTO teams SET ?;';
    return consult(sql, team, 'Sorry... don`t possible to create');
  }
  findAll() {
    const sql = 'SELECT * FROM teams;';
    return consult(sql, 'Sorry... don`t possible to localize');
  }
  findById(id) {
    const sql = 'SELECT * FROM teams WHERE id=?;';
    return consult(sql, id, 'Sorry... don`t possible to create');
  }
  update(team, id) {
    const sql = 'UPDATE teams SET ? WHERE id=?;';
    return consult(sql, [team, id], 'Sorry... don`t possible to create');
  }
  delete(id) {
    const sql = 'DELETE FROM teams WHERE id=?;';
    return consult(sql, id, 'Sorry... don`t possible to create');
  }
}

export default new TeamRepository();
