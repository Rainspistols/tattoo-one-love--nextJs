import React from 'react';
import StrapiService from '@/components/StrapiService/StrapiService';
import PoliticsExample from '@/components/PoliticsExample/PoliticsExample';

const politykaCookies = ({ PCdata }) => {
  return (
    <PoliticsExample data={PCdata} title='Polityka Cookie | Tattoo One Love' />
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const PCdata = await strapiService.getPCData();

  return {
    revalidate: 1,
    props: {
      PCdata: PCdata.content,
    },
  };
};

export default politykaCookies;
