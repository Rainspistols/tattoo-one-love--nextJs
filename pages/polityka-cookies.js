import React from 'react';
import StrapiService from '~/components/StrapiService/StrapiService';
import PoliticsExample from '~/components/PoliticsExample/PoliticsExample';

const politykaCookies = ({ PCdata }) => {
  return <PoliticsExample data={PCdata} title="Polityka Cookie | Tattoo One Love" />;
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const PCdata = await strapiService.getPCData();

  return {
    props: {
      PCdata: PCdata.content,
    },

    revalidate: 1,
  };
};

export default politykaCookies;
