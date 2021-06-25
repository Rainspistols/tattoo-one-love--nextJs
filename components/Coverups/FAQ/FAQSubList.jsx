import FAQSubListItem from "./FAQSubListItem";

const FAQSubList = ({ data }) => (
  <ul>
    {data.map(({ id, textContent }) => (
      <FAQSubListItem key={id}>{textContent}</FAQSubListItem>
    ))}
  </ul>
);

export default FAQSubList;
