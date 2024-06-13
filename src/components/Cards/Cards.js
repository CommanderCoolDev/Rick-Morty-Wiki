import React from 'react'
import s from './Cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = ({ results, page }) => {
  // console.log('cards', results)
  let display
  if (results) {
    display = results.map(el => {
      let { id, name,  image, status, location } = el
      
      return (
        <Link style={ 
          {textDecoration: 'none'}
        } to={`${page}${id}`} key={id} className='col-lg-4 col-md-6  col-12 mb-4 position-relative text-dark'>
          <div className={`${s.cards} d-flex flex-column justify-content-center`}>
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
        </Link>
      )
    })
  } else {
    display = 'No results =/'
  }
  return <>{display}</>
}







//rafce
export default Cards
