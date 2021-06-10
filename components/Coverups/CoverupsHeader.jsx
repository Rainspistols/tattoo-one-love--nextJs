import { NextSeo } from "next-seo";
import Hero from "~/components/Hero/Hero";

const CoverupsHeader = () => {
  return (
    <>
      <NextSeo title={"Coverups | Tattoo One Love"} />
      <h1 className="visually-hidden">PROJEKT SOCJALNY: COVER TO RECOVER</h1>
      <Hero
        type="coverups"
        text1="PROJEKT SOCJALNY: COVER TO RECOVER"
        text2="Niechciany tatuaż nie musi Cię definiować."
      />
    </>
  );
};

export default CoverupsHeader;
