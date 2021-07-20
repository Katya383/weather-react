import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="background">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-12 col-sm-6 mc-3 mb-3-sm-0">
                    <input
                      type="search"
                      placeholder="Enter a city"
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3 col-sm-2">
                    <button
                      className="btn btn-outline-secondary w-90"
                      id="current-location-button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="row flex-column-reverse flex-sm-row">
                <div ClassName="dol-12 col-sm-6 mini-card">
                  <div className="card">
                    <div className="overview">
                      <h1 id="city">New York</h1>
                      <ul>
                        <li>
                          <div id="date"></div>
                          <li id="description"></li>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="clearfix weather-temperature">
                          <div className="float-left">
                            <div className="temperature">
                              <strong>98</strong>
                              <span className="units">°F</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <ul>
                            <li>
                              <strong> Humidity:50%</strong>
                            </li>
                            <li>
                              <strong>Wind:3 m/hr</strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="weather-icon col-12-sm-4"
                  src="http://openweathermap.org/img/wn/02n@2x.png"
                  id="icon"
                  alt="today-icon"
                />
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Open-source coded{" "}
        <a
          href="https://github.com/Katya383/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        by Katia Barnave and hosted on
        <a
          href="https://app.netlify.com/sites/friendly-johnson-5f1a09/deploys/60f6216641fe680007371ee3"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
