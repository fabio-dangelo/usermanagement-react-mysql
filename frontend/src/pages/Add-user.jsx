import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddUser() {
  const [newUser, setnewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    comments: '',
  })

  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setnewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8100/adduser', newUser)
      setIsActive((current) => !current)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const [isActive, setIsActive] = useState(true)

  const handleAlert = () => {
    navigate('/')
  }

  return (
    <main>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/ New User</li>
        </ol>
      </nav>

      <div className={isActive ? 'alert-hidden' : 'alert'}>
        {'User added successfully.'}
        <button
          className="bi bi-x"
          onClick={handleAlert}
        ></button>
      </div>

      <form>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />
        <textarea
          name="comments"
          id="comments"
          placeholder="Leave a comment"
          onChange={handleChange}
        >
          {}
        </textarea>
        <button onClick={handleClick}>Submit</button>
      </form>
    </main>
  )
}
