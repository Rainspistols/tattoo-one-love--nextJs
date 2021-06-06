import React from 'react';
import StrapiService from '~/components/StrapiService/StrapiService';
import PoliticsExample from '~/components/PoliticsExample/PoliticsExample';

const politykaPrywatnosci = ({ PPdata }) => {
  return <PoliticsExample data={PPdata} title="Polityka prywatności | Tattoo One Love" />;
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const PPdata = await strapiService.getPPData();

  return {
    props: {
      PPdata: PPdata.content,
    },
    revalidate: 1,
  };
};

export default politykaPrywatnosci;
