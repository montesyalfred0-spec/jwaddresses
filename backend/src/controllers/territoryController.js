import pool from '../config/database.js';

export const getTerritories = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT t.*, 
        json_agg(
          json_build_object('id', n.id, 'name', n.name)
        ) as neighborhoods
      FROM territories t
      LEFT JOIN neighborhoods n ON t.id = n.territory_id
      GROUP BY t.id
      ORDER BY t.id
    `);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
