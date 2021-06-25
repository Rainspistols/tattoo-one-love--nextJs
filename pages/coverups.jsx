import CoverupsGoal from '~/components/Coverups/CoverupsGoal';
import CoverupsHeader from '~/components/Coverups/CoverupsHeader';
import CoverupsTopDescription from '~/components/Coverups/CoverupsTopDescription';
import Container from '~/Layouts/Container/Container';

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsTopDescription />
        <CoverupsGoal />
      </Container>
    </>
  );
};

export default Coverups;
