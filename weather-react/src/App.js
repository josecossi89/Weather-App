import React from "react";
const api = {
  key: "f9f1e7370232ef4f9c5f9a94cfe035ff",
  base: "https://openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder = (d) => {
    let months = [
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
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app ">
      <main>
        <div class="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div class="location-box">
          <div class="location">New York, US</div>
          <div class="date">{dateBuilder(new Date())}</div>
        </div>
        <div class="weather-box">
          <div class="temp">15°</div>
          <div class="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
