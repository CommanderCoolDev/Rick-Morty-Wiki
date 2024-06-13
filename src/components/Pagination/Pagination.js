import React, {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import s from './Pagination.module.scss'

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let[width, setWidth] = useState(window.innerWidth)
  const updtDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updtDimension)
    return () =>  window.removeEventListener('resize', updtDimension)
  },[])
  return (
    <>
      <style jsx>
        {`@media (max-width:768px){
.next, .prev{
  display:none;
}
.pagination{
font-size: 14px;
}
        }`}
    </style>
    <ReactPaginate
      pageCount={info?.pages}
      className='pagination  justify-content-center gap-3 my-4'
      nextLabel='Next'
      previousLabel='Prev'
      nextClassName='btn btn-primary next'
      previousClassName='btn btn-primary prev'
      previousLinkClassName={s.anchor}
      nextLinkClassName={s.anchor}
      pageClassName='page-item'
        pageLinkClassName='page-link'
        marginPagesDisplayed={width < 576 ? 1 :2}
        pageRangeDisplayed={width < 576 ? 3 :5}
      activeClassName='active'
      // breakLabel='gogogo'
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      onPageChange={data => {
        setPageNumber(data.selected + 1)
      }}
      />
      </>

  )
}

export default Pagination
