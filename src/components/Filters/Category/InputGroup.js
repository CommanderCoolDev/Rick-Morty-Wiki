import React from 'react'

function InputGroup({ total, name, setID }) {
  return (
    <div class='input-group mb-3'>
      <select
        onChange={e => setID(e.target.value)}
        class='form-select'
        id={name}
      >
        <option selected>Choose {name}...</option>
        {[...Array(total).keys()].map(x => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default InputGroup
