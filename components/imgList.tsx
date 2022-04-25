import * as S from "../styles/imgList";
import Slide from "react-reveal/Slide";
import { useState } from "react";

interface cardDataType {
  img: string;
  title: string;
  text: string;
}

const cardData: cardDataType[] = [
  {
    img: "/img/hgPhoto1.jpg",
    title: "한강공원",
    text: "한강의 아름다움",
  },
  {
    img: "/img/hgPhoto2.jpg",
    title: "한강의 겨울",
    text: "얼어붙은 한강 속 작은 길",
  },
  {
    img: "/img/hgPhoto3.jpg",
    title: "한강의 야경",
    text: "석양 속 도시와 어우러진 한강",
  },
];

const ImgList = () => {
  return (
    <S.Page>
      <S.Explanation>
        <h1>EXPLANATION</h1>
        <p>
          한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천 입니다.
        </p>
      </S.Explanation>
      <Slide bottom cascade>
        <S.CardList>
          {cardData.map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </S.CardList>
      </Slide>
    </S.Page>
  );
};

const Card = ({ data }: { data: cardDataType }) => {
  const [hoverImgHidden, setHoverImgHidden] = useState<boolean>(true);

  const mouseEnter = () => {
    console.log("enter");
    setHoverImgHidden(false);
  };

  const mouseLeave = () => {
    setHoverImgHidden(true);
  };

  return (
    <S.PhotoCard>
      <S.CardImg
        src={data.img}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      ></S.CardImg>
      <div>
        <h1>{data.title}</h1>
        <p>
          {data.text.split(" ").map((text: string, index: number) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
      <S.HoverImg isHidden={hoverImgHidden} />
    </S.PhotoCard>
  );
};
export default ImgList;
