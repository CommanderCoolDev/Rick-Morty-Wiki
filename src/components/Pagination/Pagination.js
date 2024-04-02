import React from 'react'
import ReactPaginate from 'react-paginate'
import s from './Pagination.module.scss'

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      className='pagination  justify-content-center gap-3 my-4'
      nextLabel='Next'
      previousLabel='Prev'
      nextClassName='btn btn-primary'
      previousClassName='btn btn-primary'
      previousLinkClassName={s.anchor}
      nextLinkClassName={s.anchor}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      // breakLabel='gogogo'
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      onPageChange={data => {
        setPageNumber(data.selected + 1)
      }}
    />
    // <div className='container d-flex justify-content-center gap-5 my-5'>
    //   <button className='btn btn-primary' onClick={prev}>
    //     Prev
    //   </button>
    //   <button className='btn btn-primary' onClick={next}>
    //     Next
    //   </button>
    // </div>
  )
}

export default Pagination
