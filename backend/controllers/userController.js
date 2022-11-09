import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

// View All
export const view = (req, res) => {
  db.query('SELECT * FROM user WHERE status = "active"', (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

// Add new User
export const create = (req, res) => {
  db.query(
    'INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?',
    [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.phone,
      req.body.comments,
    ],
    (err, data) => {
      if (err) return res.json(err)
      return res.json(data)
    }
  )
}

// Edit User
export const edit = (req, res) => {
  db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

// Update User
export const update = (req, res) => {
  db.query(
    'UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?',
    [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.phone,
      req.body.comments,
      req.params.id,
    ],
    (err, data) => {
      if (err) return res.json(err)
      return res.json(data)
    }
  )
}

// Delete User
export const _delete = (req, res) => {
  db.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}

// View User
export const viewuser = (req, res) => {
  db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
}
