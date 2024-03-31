import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filters from './components/Filters/Filters'
import Cards from './components/Cards/Cards'
// import './App.css'

function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [data, setData] = useState([])
  let { info, results } = data
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
  console.log(results)
  console.log(info)
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
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards />
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </div>
  )
}

export default App
