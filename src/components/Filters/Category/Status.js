import React from 'react'
import FilterBtn from '../FilterBtn'

const Status = ({ setPageNumber, setStatus }) => {
  let status = ['Alive', 'Dead', 'Unknown']

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseThree'
          aria-expanded='true'
          aria-controls='collapseThree'
        >
          Status
        </button>
      </h2>
      <div
        id='collapseThree'
        className='accordion-collapse collapsed show'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {status.map((item, index) => (
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              name='status'
              index={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status
