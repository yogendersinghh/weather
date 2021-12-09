import React, { useState,useEffect,useRef } from 'react'
import "./App.css"
import axios from 'axios';
import Card from './Card';


const App = () => {
  // const [Weather,setWeather] = useState("");
  const [tog ,setTog] = useState(false);
  const initialValue = useRef("")

  const [showData,setShowData] = useState({name:'',temp:'',result:'',icon:'',dailys:[]})
  

 
  const key = "6d6020cfb149e6f2302954d8b2286ca1";
  let data;
  const getData = async()=>{
    const weather = initialValue.current.value
    data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${key}`)
    // console.log(data)
    const dailys = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.data.coord.lat}&lon=${data.data.coord.lon}&appid=${key}`)
    showData.dailys.length = 0;
    dailys.data.daily.forEach((elem)=>{
      // console.log(elem)
       showData.dailys.push(elem)
      
    })
    const celsius = Math.floor(data.data.main.temp - 273.15);
    // console.log(empty)
    setShowData({
      ...showData,
      name:data.data.name,
      temp:celsius,
      result:data.data.weather[0].main,
      icon:data.data.weather[0].icon
     
    })
    console.log(showData.dailys)
    setTog(true)

    // console.log(initialValue.current.value)

  }
  return (
    <>
      <input type="text" id="try" ref={initialValue} placeholder="Enter Your City Name" autoComplete="off"/>
       <button id="btn" type="submit" onClick = {getData}><i className="fas fa-search"></i></button>
       
    { tog && <Card name ={showData.name} temp = {showData.temp} result = {showData.result} icon={showData.icon} dailys={showData.dailys}/>}
    </>
  )
}

export default App

