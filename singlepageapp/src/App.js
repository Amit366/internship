import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  const getUsers = () => {
    setIsLoader(true);
    Axios.get("https://dev.dashmed.in/sample-data").then((response) => {
      console.log("api data received");
      setData(response.data.data);

      setIsLoader(false);
    });
  };
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked]);
  return (
    <div className="App">
      <Navbar onSetIsClicked={setIsClicked} />
      <ToastContainer position="top-center" hideProgressBar={false} />
      <div className="row">
        {/*mapping through response*/}
        {data &&
          data.map((val) => {
            return (
              <Card
                medname={val.medName}
                saltName={val.saltName}
                manufacturer={val.manufacturer}
              />
            );
          })}
      </div>
      <Loader show={isLoader} />
    </div>
  );
}
export default App;
