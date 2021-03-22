const { default: Hero } = require('@/components/common/Hero/Hero');

const heroBgImageData = {
  src: {
    mobile: '/AboutUsSection/tattoo-studio-1.jpeg',
    desktop: '/AboutUsSection/tattoo-studio-2.jpeg',
  },
  alt: 'tattoo one love hero image',
  objectPosition: 'center 60%',
};

const NewPage = () => {
  return (
    <div>
      <Hero
        bgImageData={heroBgImageData}
        title="Free COVER UPS - OUR social responsibility"
        subtitle="Yada yada yada"
      />
    </div>
  );
};

export default NewPage;
