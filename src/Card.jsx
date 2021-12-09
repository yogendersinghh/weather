import React from "react";
const date = new Date();
  const day = date.getDay();
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weeday = week[day];
  const todayDate = date.getDate();
  let newDate = todayDate;
  const month = date.getMonth();
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newMonth = monthList[month];
  const year = date.getFullYear();

const Card = ({ name, temp, result, icon, dailys }) => {
  
  return (
    <>
    {console.log(todayDate)}
      {console.log("card")}
      <div className="card card-weather">
        <div className="card-body">
          <div className="weather-date-location">
            <h3>{weeday}</h3>
            <p className="text-gray">
              
              <span className="weather-date">
                {todayDate} {newMonth}, {year}
              </span>
              <span className="weather-location">{name}</span>
            </p>
          </div>
          <div className="weather-data d-flex">
            <div className="mr-auto">
              <h4 className="display-3">
                {temp}
                <span className="symbol">°</span>C
              </h4>
              <p>{result} </p>
              <p>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}.png`}
                  alt="icons"
                />
              </p>
            </div>
          </div>
        </div>
        </div>
      {/* {console.log(dailys)} */}
      <div className="card-container">
      {dailys.map((daily) => {
          // console.log(daily.temp.day)
          let temperature = Math.floor(daily.temp.day - 273.15)
          return (
                <>   
                      <div className="card-container-main">
                        <p className="">{
                          ++newDate
                        } </p>
                        <img
                          src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}.png`}
                          alt="icons"
                        />
                        <p className="">{temperature} <span className="symbol">°</span>C </p>
                      </div>
                      
                  {/* {console.log("yyyy")} */}
                </>
              );
        })}</div>
       
    </>
  );
};

export default Card;
