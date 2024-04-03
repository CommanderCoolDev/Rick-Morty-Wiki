import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filters from './components/Filters/Filters'
import Cards from './components/Cards/Cards'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
// import './App.css'

function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [data, setData] = useState([])
  let [search, setSearch] = useState('')
  let { info, results } = data
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  // console.log(results)
  // console.log(info?.pages)
  //TODO: move to separate file
  // let fetchData = async () => {
  //   let data = await fetch(api)
  //     .then(res => res.json())
  //     .catch(err => console.log('error:', err))
  //   setData(data)
  // }

  useEffect(() => {
    // fetchData()
    //IIFE
    ;(async function () {
      let data = await fetch(api)
        .then(res => res.json())
        .catch(err => console.log(err))
      setData(data)
    })()
  }, [api])
  return (
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>
        Rick and Morty <span className='text-primary'>Mighty WIKI</span>
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className='container'>
        <div className='row'>
          <Filters />

          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}

export default App
