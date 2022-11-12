import React  from 'react'
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import './Det.css'

const Show = () => {
    const params = useParams();
    const [grap , setGrap] = useState([]);
    const [coin , setCoin] = useState("");
    const [d1 , setD1] = useState("");
    const [d2 , setD2] = useState("");
    const [d3 , setD3] = useState("");
    const [d4 , setD4] = useState("");

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=USD&days=365`).then((response) => {
            const temp = response.data.prices.map( (ele) =>{
                const [times , price] = ele;
                const dat = new Date(times).toLocaleDateString("en-us")
                return {
                    date : dat,
                    prices : price
                }
            } ) 
            setGrap(temp)
        }).catch((error) => {
            console.log(error)
        })
       
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&market_data=true`).then((res) => {
              setCoin(res.data.id)
              setD1(res.data.symbol)
              setD2(res.data.description.en)
              setD3(res.data.links.homepage[0])
              setD4(res.data.image.large)
        })
    }, [])
  return (
    <div className='page'> 
    <div className='container'>
       <div className='left'>
       <h1>{coin} ({d1})</h1> 
       <br /><br /><br />
        <p><a href={d3} >Official homepage</a></p>  
        <h3>Description : </h3>
        <p>{d2}</p>  
       </div>
     <div className='right'>
      <img src={d4} alt="" />
     </div>
    </div>
    <br /><br /><br />
    
    <div className="graph">
    <h2>Last 1 year update in market </h2>
    <br /><br />
         <AreaChart
          width={1500}
          height={500}
          data={grap}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="prices" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
 
        </div>     
    </div>
  )
}

export default Show