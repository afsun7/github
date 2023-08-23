import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";
import { ShowRepository } from "./copmonent/ShowRepository";
function App() {
  //get api
  const [repositor, setRepositor] = useState([]);
  async function getData() {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/google/repos"
      );
      setRepositor(data);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full items-center flex justify-center ">
      <div className=" mt-20">
        <h1 className=" text-3xl font-bold mb-4 ml-4 ">Repositories</h1>
        <div className=" w-[64rem]  border-[1px] border-gray-300 rounded-[8px]">
      
          <ShowRepository repositor={repositor} />
        </div>
      </div>
    </div>
  );
}

export default App;
