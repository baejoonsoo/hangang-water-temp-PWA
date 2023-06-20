import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { hangangDataType } from '../interface/hangangData';

import Header from '../components/header';
import Temp from '../components/temp';
import DetailExplanation from '../components/detailExplanation';
import ImgList from '../components/imgList';
import HangangSymbol from '../components/hangangSymbol';
import Footer from '../components/footer';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  const [hangangData, setHangangData] = useState<hangangDataType>({
    temp: '',
    time: '',
    station: '',
  });

  const getHangangData = async () => {
    try {
      const { data } = await axios.get('/api');

      setHangangData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getHangangData();
  }, []);

  return (
    <Page>
      <Header station={hangangData.station} />
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
      <div id="footer">
        <Footer />
      </div>
    </Page>
  );
};

export default Home;

const Page = styled.main`
  overflow-x: hidden;
`;
