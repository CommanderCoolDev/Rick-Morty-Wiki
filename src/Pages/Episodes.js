import React,{useState,useEffect} from 'react'

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([])
  let {air_date, name } = info
  let api = `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setInfo(data)
    })()
  },[api])
  return <div>Episodes</div>
}

export default Episodes
