import CoverupsHeader from '~/components/Coverups/CoverupsHeader';
import CoverupsTopDescription from '~/components/Coverups/CoverupsTopDescription';
import Container from '~/Layouts/Container/Container';

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsTopDescription />
      </Container>
    </>
  );
};

export default Coverups;
