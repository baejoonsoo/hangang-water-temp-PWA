import * as S from "../styles/mainPage";
import Slide from "react-reveal/Slide";
import { hangangDataType } from "../interface/hangangData";

interface props {
  hangangData: hangangDataType;
}

function Temp({ hangangData }: props) {
  return (
    <S.Page>
      <S.HangangTempData>
        <S.HangangImg />
        <S.TempData>
          <p className="topText">지금 한강은</p>
          <Slide left>
            <p className="temp">
              {hangangData.temp !== "" ? (
                "점검중" === hangangData.temp ? (
                  "점검 중"
                ) : (
                  `${hangangData.temp}°C`
                )
              ) : (
                <S.Loading src="/img/loading.gif" />
              )}
            </p>
          </Slide>
          <div className="time">
            <p>{hangangData.time}</p>
          </div>
        </S.TempData>
      </S.HangangTempData>
    </S.Page>
  );
}

export default Temp;
