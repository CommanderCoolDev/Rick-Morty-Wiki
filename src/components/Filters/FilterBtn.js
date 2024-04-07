import React from 'react'

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>{`
        .x:checked + label {
          background: #0b5ed7;
          color: #fff;
        }
        input[type='radio'] {
          display: none;
        }
      `}</style>
      <div className='form-check'>
        <input
          onClick={() => {
            setPageNumber(1)
            task(item)
          }}
          className='form-check-input x'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label className='btn btn-outline-primary' for={`${name}-${index}`}>
          {item}
        </label>
      </div>
      {/* <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault2'
          checked
        />
        <label className='btn btn-outline-primary' for='flexRadioDefault2'>
          Default checked radio
        </label>
      </div> */}
    </div>
  )
}

export default FilterBtn
