import CoverupsGoal from '~/components/Coverups/CoverupsGoal';
import CoverupsHeader from '~/components/Coverups/CoverupsHeader';
import CoverupsTopDescription from '~/components/Coverups/CoverupsTopDescription';
import CoverupsFAQ from '~/components/Coverups/FAQ/CoverupsFAQ';
import Container from '~/Layouts/Container/Container';

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsTopDescription />
        <CoverupsGoal />
        <CoverupsFAQ />
      </Container>
    </>
  );
};

export default Coverups;
