import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './More.css'
const More = () => {

  const [data, setData] = useState([])
  const [serh, setSerh] = useState([])
  const [query , setQuery] = useState('');
  const handle = (e) => {
      setQuery(e.target.value)
        if ( query.length > 2){
        axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`).then((res) => { 
          setSerh(res.data.coins)
         }) 
        } else{
          setSerh([])
        } 
  }
  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/search/trending').then((response) => {
          setData(response.data.coins)
           
      }).catch((error) => {
          console.log(error)
      })
  }, [])
   console.log(data);
  return (
    <div className='page'>
      <br />
      <h2>Search 
      <input type='text' value={query} onChange={handle} /> </h2>
      <br /> 
      {
        serh.map(ele => {
          return (
            <Link to={`${ele.id}`}>
            <div className='scoin' key={ele.id} >
             {ele.name} 
            </div>
            </Link>
        )
        })
      }
      <br />
      <br /><br />
      <div className='dow' >
      <h1>Trending Coin of today</h1>
      {
        data.map(ele => {
          return (
            <Link to={`${ele.item.id}`}>
            <div className='tcoin' key={ele.item.id}>
            <div className='lef' >
              <h3>{ele.item.name} ({ele.item.symbol}) </h3>
              <span>Current price : $ {ele.item.price_btc.toFixed(10)}</span>
            </div>
            <div>
             <img src={ele.item.small} alt="" />
            </div>   
            </div>
            </Link>
        )
        })
      }</div>
    </div>
  )
}

export default More