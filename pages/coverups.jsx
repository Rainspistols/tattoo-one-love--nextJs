import CoverupsHeader from "~/components/Coverups/CoverupsHeader";
import CoverupsDescription from "~/components/Coverups/CoverupsDescription";
import CoverupsFAQ from "~/components/Coverups/CoverupsFAQ";
import CoverupsGoal from "~/components/Coverups/CoverupsGoal";
import CoverupsParticipation from "~/components/Coverups/CoverupsParticipation";
import Container from "~/Layouts/Container/Container";
import CoverupsMemo from "~/components/Coverups/CoverupsMemo";

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsDescription />
        <CoverupsGoal />
        <CoverupsFAQ />
        <CoverupsParticipation />
        <CoverupsMemo />
      </Container>
    </>
  );
};

export default Coverups;
