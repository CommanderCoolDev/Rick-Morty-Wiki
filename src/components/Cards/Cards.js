import React from 'react'
import s from './Cards.module.scss'

const Cards = ({ results }) => {
  // console.log('cards', results)
  let display
  if (results) {
    display = results.map(el => {
      let { id, name, gender, image, status, location } = el
      // console.log(el)
      return (
        <div key={id} className='col-4 mb-4 position-relative'>
          <div className={s.cards}>
            <img src={image} alt='' className={`${s.img} img-fluid`} />
            <div className={`${s.content} content`}>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last Location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === 'Dead') {
              return (
                <div className={`${s.badge} badge bg-danger position-absolute`}>
                  {status}
                </div>
              )
            } else if (status === 'Alive') {
              return (
                <div
                  className={`${s.badge} badge bg-success position-absolute`}
                >
                  {status}
                </div>
              )
            } else {
              return (
                <div
                  className={`${s.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              )
            }
          })()}
        </div>
      )
    })
  } else {
    display = 'No results =/'
  }
  return <>{display}</>
}







//rafce
export default Cards
