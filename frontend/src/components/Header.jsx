import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isActive, setIsActive] = useState(true)

  const handleClick = () => {
    setIsActive((current) => !current)
  }

  return (
    <header>
      <nav>
        <Link to="/">User Management System</Link>
        <ul>
          <li className={isActive ? 'hidden' : ''}>
            <Link to="/">Home</Link>
          </li>
          <form className={isActive ? 'hidden' : ''}>
            <input
              type="search"
              name="search"
              placeholder="Search"
            />
            <button>Search</button>
          </form>
        </ul>
        <button>
          <i
            onClick={handleClick}
            className="bi bi-list"
          ></i>
        </button>
      </nav>
    </header>
  )
}
