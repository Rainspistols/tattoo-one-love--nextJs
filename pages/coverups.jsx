import CoverupsHeader from "~/components/Coverups/CoverupsHeader";
import CoverupsDescription from "~/components/Coverups/CoverupsDescription";
import CoverupsFAQ from "~/components/Coverups/CoverupsFAQ";
import CoverupsGoal from "~/components/Coverups/CoverupsGoal";
import Container from "~/Layouts/Container/Container";

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsDescription />
        <CoverupsGoal />
        <CoverupsFAQ />
      </Container>
    </>
  );
};

export default Coverups;
