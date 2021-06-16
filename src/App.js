import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [data, setData] = useState();
  const [_year, setYear] = useState(false);
  const [yr, setYr] = useState("");
  const [mainState, setMainState] = useState(true);
  const [launch, setLaunch] = useState(false);
  const [land, setLand] = useState(false);

  useEffect(() => {
    if (mainState === true) {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
      setMainState(false);
    } else if (_year === true && launch === true && land === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${yr}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (_year === true && launch === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&launch_year=${yr}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (_year === true && land === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&land_success=true&launch_year=${yr}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (launch === true && land === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (_year === true) {
      console.log("clicked", yr);
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${yr}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (launch === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } else if (land === true) {
      fetch(
        `https://api.spacexdata.com/v3/launches?limit=100&land_success=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [data, _year, land, launch, yr, mainState]);

  const year = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  return (
    <div className="App">
      <h2 style={{ margin: "5px" }}>SpaceX Launch Programs</h2>
      <div className="parent">
        <div className="filters" style={{ height: "500px" }}>
          <h2>Filters</h2>
          <div className="sub_filter">
            <p>Launch year</p> <hr />
            <div className="filter_button">
              {year.map((val) => {
                return (
                  <>
                    <button
                      onClick={() => {
                        setYr(val);
                        setYear(true);
                      }}
                    >
                      {val}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="success_launch">
              <p>Successful Launch</p> <hr />
              <button
                onClick={() => {
                  setLaunch(true);
                }}
              >
                True
              </button>
              <button
                onClick={() => {
                  setLaunch(false);
                }}
              >
                False
              </button>
            </div>
            <div className="success_land">
              <p>Successfull Landing</p> <hr />
              <button
                onClick={() => {
                  setLand(true);
                }}
              >
                True
              </button>
              <button
                onClick={() => {
                  setLand(false);
                }}
              >
                False
              </button>
            </div>
          </div>
        </div>
        <div className="mainBody">
          {data === undefined
            ? ""
            : data.map((val) => {
                return (
                  <>
                    <Card val={val} />
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
