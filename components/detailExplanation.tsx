import * as S from "../styles/detailExplanation";
import { useEffect, useRef } from "react";
import { hangangDataType } from "../interface/hangangData";

interface props {
  hangangData: hangangDataType;
}

const tempCheck = (temp: string) => {
  const tempInt = parseFloat(temp);

  if (tempInt > 20) {
    return "오늘은 물은 많이 따뜻하네요";
  } else if (tempInt >= 10) {
    return "이 정도 온도면 들어가기 좋겠다";
  } else if (tempInt < 10) {
    return "오늘 물 많이 차가운데 조금만 기다려봐요";
  }
  return "물 온도를 재는 중이에요!!";
};

const DetailExplanation = ({ hangangData }: props) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);

  const tempMsg = tempCheck(hangangData.temp);

  const onScroll = () => {
    window.addEventListener("scroll", (e: any) => {
      const value = window.scrollY - window.innerHeight;

      if (imgRef && imgRef.current) {
        imgRef.current.style.left = value + 10 + "px";
      }
      if (msgRef && msgRef.current) {
        msgRef.current.style.right = value + 100 + "px";
      }
    });
  };

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <S.Page>
      <S.HangangImg>
        <img src="/img/hangang.jpeg" ref={imgRef} alt="한강 이미지" />
      </S.HangangImg>
      <S.ContextDiv ref={msgRef}>
        <S.Content>{tempMsg}</S.Content>
        <S.Content>세상은 아직 살만해요</S.Content>
        <S.Content>마포대교? 한강대교? 올림픽대교?</S.Content>
        <S.Content>부모님께 안부 전화는 드렸나요?</S.Content>
        <S.Content>자살예방 상담 전화 1393</S.Content>
      </S.ContextDiv>
    </S.Page>
  );
};

export default DetailExplanation;
