import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ViewUser() {
  const [users, setUsers] = useState([])

  const userId = location.pathname.split('/')[2]

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8100/viewuser/' + userId,
          users
        )
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllUsers()
  }, [])

  return (
    <main>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/ Edit-User</li>
        </ol>
      </nav>

      <table>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>

        <thead className="small-table">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <th scope="row">{user.first_name}</th>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>

      {users.map((user) => (
        <div
          className="comments-container"
          key={user.id}
        >
          <b>Comments</b>
          <div className="comments">{user.comments}</div>
        </div>
      ))}
    </main>
  )
}
