import React from "react";
const api = {
  key: "f9f1e7370232ef4f9c5f9a94cfe035ff",
  base: "https://openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="app ">
      <main>
        <div class="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
