import React from 'react';
import StrapiService from '@/components/StrapiService/StrapiService';
import PoliticsExample from '@/components/PoliticsExample/PoliticsExample';

const regulamin = ({ regulaminData }) => {
  return (
    <PoliticsExample
      data={regulaminData}
      title='Regulamin | Tattoo One Love'
    />
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const regulaminData = await strapiService.getRegulaminData();

  return {
    revalidate: 1,
    props: {
      regulaminData: regulaminData.content,
    },
  };
};

export default regulamin;
