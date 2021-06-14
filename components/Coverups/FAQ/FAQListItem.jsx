import FAQSubList from "./FAQSubList";
import styled from "@emotion/styled";

const FAQListItem = ({ title, sublist, children }) => (
  <FAQListItemStyled>
    {title && <h4 className="title">{title}</h4>}
    {children}
    {sublist.length > 0 && <FAQSubList data={sublist} />}
  </FAQListItemStyled>
);

const FAQListItemStyled = styled.li`
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};
  margin-top: ${({ theme }) => theme.vw(40)};
  position: relative;

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
    margin-top: ${({ theme }) => theme.vw1920(40)};
  }

  // Pink Bullet
  &:before {
    content: "";
    position: absolute;
    width: ${({ theme }) => theme.vw(30)};
    height: ${({ theme }) => theme.vw(30)};
    background-color: ${({ theme }) => theme.colors.pink2};
    top: ${({ theme }) => theme.vw(10)};
    left: -${({ theme }) => theme.vw(40)};
    border-radius: 50%;

    ${({ theme }) => theme.mediaDesktop} {
      top: ${({ theme }) => theme.vw1920(10)};
      left: -${({ theme }) => theme.vw1920(160)};
      width: ${({ theme }) => theme.vw1920(80)};
      height: ${({ theme }) => theme.vw1920(80)};
    }
  }

  .title {
    font-size: ${({ theme }) => theme.vw(29)};
    line-height: ${({ theme }) => theme.vw(43)};

    ${({ theme }) => theme.mediaDesktop} {
      font-size: ${({ theme }) => theme.vw1920(48)};
      line-height: ${({ theme }) => theme.vw1920(72)};
    }
  }
`;

export default FAQListItem;
