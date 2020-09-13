import React from 'react';
import StrapiService from '@/components/StrapiService/StrapiService';
import PoliticsExample from '@/components/PoliticsExample/PoliticsExample';

const regulamin = ({ regulaminData }) => {
  return (
    <PoliticsExample
      data={regulaminData}
      headTitle='Regulamin Tattoo One Love'
    />
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const regulaminData = await strapiService.getRegulaminData();

  return {
    props: {
      regulaminData: regulaminData.regulamin_text,
    },
  };
};

export default regulamin;
