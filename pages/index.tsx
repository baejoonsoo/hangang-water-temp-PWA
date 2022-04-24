import type { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import { hangangDataType } from "../interface/hangangData";
// import "./style/font.css";

// import Header from "./components/\bheader";
import Temp from "../components/temp";
import DetailExplanation from "../components/detailExplanation";
import ImgList from "../components/imgList";
import HangangSymbol from "../components/hangangSymbol";
// import Footer from "./components/footer";

const Home: NextPage = () => {
  const [hangangData, setHangangData] = useState<hangangDataType>({
    temp: "",
    time: "",
    station: "",
  });

  const getHangangData = () => {
    axios.get("https://api.hangang.msub.kr").then(({ data }) => {
      console.log(data);
      setHangangData(data);
    });
  };

  useEffect(() => {
    getHangangData();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <Header station={hangangData.station} /> */}
      <div id="temp">
        <Temp hangangData={hangangData} />
      </div>
      <div id="tag">
        <DetailExplanation hangangData={hangangData} />
      </div>
      <div id="explanation">
        <ImgList />
      </div>
      <div id="symbol">
        <HangangSymbol />
      </div>
      {/* <div id="footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
