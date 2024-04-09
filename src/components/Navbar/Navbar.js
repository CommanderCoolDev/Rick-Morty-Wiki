import React from 'react'

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-body-tertiary'>
      <div class='container'>
        <h1 className='fs-2 ubuntu navbar-brand'>
          Rick and Morty <span className='text-primary'>Mighty WIKI</span>
        </h1>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          class='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div class='navbar-nav'>
            <a class='nav-link active' aria-current='page' href='#'>
              Characters
            </a>
            <a class='nav-link' href='#'>
              Episodes
            </a>
            <a class='nav-link' href='#'>
              Pricing
            </a>
            <a class='nav-link disabled' aria-disabled='true'>
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
