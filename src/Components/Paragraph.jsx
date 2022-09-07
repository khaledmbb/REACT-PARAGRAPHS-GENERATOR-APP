import { useState } from "react";
import From from "./From";
import SettingData from "./SettingData";
const url = "https://jsonplaceholder.typicode.com/posts";

const Paragraph = () => {
  const [pph, setPph] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [numOfP, setNumOfP] = useState(0);

  const fetchData = async (num) => {
    const data = await fetch(url);
    const response = await data.json();
    const paragraphs = response.map(({ body }, idx) => (idx < num ? body : ""));
    setPph(paragraphs.filter((el) => el !== ""));
    setPreloader(false);
  };

  const handleChange = (e) => {
    setNumOfP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreloader(true);
    fetchData(numOfP);
  };
  console.log(preloader);
  return (
    <div className="box">
      <From
        numOfP={numOfP}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {preloader ? <h2>Loading ...</h2> : <SettingData data={pph} />}
    </div>
  );
};

export default Paragraph;
