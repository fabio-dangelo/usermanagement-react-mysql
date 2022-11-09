import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8100/')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllUsers()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8100/' + id)
      setIsActive((current) => !current)
    } catch (error) {
      console.log(error)
    }
  }

  const [isActive, setIsActive] = useState(true)

  const handleAlert = () => {
    window.location.reload()
  }

  return (
    <main>
      <div className={isActive ? 'alert-hidden' : 'alert'}>
        {'User has been removed.'}
        <button
          className="bi bi-x"
          onClick={handleAlert}
        ></button>
      </div>

      <div>
        <h1>Users</h1>
        <Link
          to="/adduser"
          type="button"
        >
          + add user
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {/* ERROR: Each child in a list should have a unique "key" prop. */}
        {users.map((user) => (
          <>
            <thead className="small-table">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {/* 
            ERROR HANDLING!
            REMOVE USER.MAP AND FRAGEMENTS ABOVE! 
            WRAP USER.MAP IN TBODY AND GIVE TBODY A KEY <tbody key={user.id}>
            BREAKS UI SMALL AND MOBILE DEVICE (FIND A BETTER SOLUTION LATER!)
            */}
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>

                <td>
                  <Link to={`/viewuser/${user.id}`}>
                    <i className="bi bi-eye">View</i>
                  </Link>
                  <Link to={`/edituser/${user.id}`}>
                    <i className="bi bi-pencil">Edit</i>
                  </Link>

                  <Link>
                    <i
                      onClick={() => handleDelete(user.id)}
                      className="bi bi-person-x"
                    >
                      Delete
                    </i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </main>
  )
}
