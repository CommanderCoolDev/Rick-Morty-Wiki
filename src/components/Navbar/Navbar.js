import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container'>
        <Link to='/' className='fs-2 ubuntu navbar-brand'>
          Rick and Morty <span className='text-primary'>Mighty WIKI</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
          <FontAwesomeIcon icon='fa-solid fa-bars open' />
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav fs-5'>
            <NavLink to='/' className='nav-link '>
              Characters
            </NavLink>
            <NavLink to='/episodes' className='nav-link'>
              Episodes
            </NavLink>
            <NavLink to='/location' className='nav-link'>
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
