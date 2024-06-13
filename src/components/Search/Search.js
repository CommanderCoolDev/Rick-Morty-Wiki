import React from 'react'
import s from './Search.module.scss'

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form action='' className='d-flex flex-sm-row  flex-column align-items-center justify-content-center gap-4 mb-5'>
      <input
        onChange={e => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        type='text'
        placeholder='Search for Character'
        className={s.input}
      />
      <button
        onClick={e => {
          e.preventDefault()
        }}
        className={`${s.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  )
}

export default Search
