import { useEffect, useState } from 'react'
import React from 'react';
import axios, { all } from 'axios';
import imges from './imges'
import DateDay from './DateDay';
import Pais from './Pais';




const Dataweather = () => {
   
    const [weatherTime, setWeather] = useState("")
    const [isF, setF] = useState(true)
    const [isC, setC] = useState(true)
    const [iskm, setKm] = useState(false)
    const [ismm, setMm] = useState(false)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=0.9621175&lon=-79.6298495&appid=5a5b539d2f4cb735c4346d5e23fe50db`)
            .then((res) => setWeather(res.data))

    }, [])
    let c = weatherTime.main?.temp
    let resC = c - 273.15
    let resF = (resC * 9 / 5) + 32
    let mph=weatherTime.wind?.speed
    let restkm=mph*1.609
    let mb=weatherTime.main?.pressure
    let resmm= mb*0.7501
    const CambF = () => {
        setF(!isF)
        setC(!isC)
        setKm(!iskm)
        setMm(!ismm)
    }
    let h =new Date()
    let Hor=h.getHours()
    let Min =h.getMinutes()
    const AllHours= Hor + ":" + Min
    let Nday= h.getDay()
    let Country=weatherTime.sys?.country
    return (
        <div className='cartWeather' >
         
            <h1>Weather App</h1>
            <h3 className='day'>{DateDay[Nday]}</h3>
            <h5>{AllHours}</h5>
            <h2>Country: {Pais[Country]}</h2>
            <h3 className='Description'>{weatherTime.weather?.[0].description}</h3>
            <h4>Humidity: {weatherTime.main?.humidity} %</h4>
            <img className='imgenApp' src={`http://openweathermap.org/img/wn/${weatherTime.weather?.[0].icon}@4x.png`} alt="" />
            <h3 className='humidity'>{ isF ?  resC.toFixed(2):resF.toFixed(2)} {isC ? "°C":"°F"}</h3>

            <div className='divWind'>
                <img className='windimg' src={imges.wind} alt="" />
                <h3 className='windh3'>{iskm ? mph.toFixed(2):restkm.toFixed(2)} {isC ? "km/h":"mph"}</h3>
                <span className='windspan' >Wind Speed</span>

            </div>

            <div className='divCloud'>
                <img className='imgCloud' src={imges.cloud} alt="" />
                <span className='cloudspan'>Clouds</span>
                <h3 className='cloudh3'>{weatherTime.clouds?.all} %</h3>

            </div>


            <div className='divpressure'>
                <img className='pressureimg' src={imges.Pressure} alt="" />
                <h3 className='pressureh3' >{ismm ? mb.toFixed(2):resmm.toFixed(2)} {isC ? "mm":"mb"}</h3>
                <span className='pressurespan' >Perssure</span>
            </div>

            <button onClick={CambF}>Degrees °C/°F<Form:get></Form:get></button>
        </div>
    );
};

export default Dataweather;