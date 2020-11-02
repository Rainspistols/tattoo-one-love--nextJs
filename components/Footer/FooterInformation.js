import styled from "@emotion/styled";
import FooterTitle from "./FooterTitle";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBreakpoint } from "../../utils/breakpoint";

const FooterInformation = () => {
  const informationListDataMobile = [{ title: "Głowna", href: "/", id: 1 }];

  const informationListDataDesktop = [
    { title: "Głowna", href: "/", id: 1 },
    { title: "Kontakt", href: "/#contact", id: 2 },
  ];

  const breakpoint = useBreakpoint();

  const router = useRouter();

  return (
    <FooterInformationStyled>
      <FooterTitle text="Informacja" />
      <ul>
        {breakpoint.mobile
          ? informationListDataMobile.map(({ title, href, id }) => (
              <li key={id}>
                <Link href={href}>
                  <a className={router.pathname == href ? "inactive" : ""}>
                    {title}
                  </a>
                </Link>
              </li>
            ))
          : informationListDataDesktop.map(({ title, href, id }) => (
              <li key={id}>
                <Link href={href}>
                  <a className={router.pathname == href ? "inactive" : ""}>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
      </ul>
    </FooterInformationStyled>
  );
};

const FooterInformationStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.vw(10)};

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    font-size: ${({ theme }) => theme.vw(13)};
    line-height: ${({ theme }) => theme.vw(20)};
    margin-right: ${({ theme }) => theme.vw(30)};
    display: flex;
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 400;
  }

  img {
    padding-right: ${({ theme }) => theme.vw(10)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    ul {
      flex-direction: column;

      li {
        :not(:last-child) {
          margin-bottom: ${({ theme }) => theme.vw1920(10)};
        }
      }
    }

    a {
      font-size: ${({ theme }) => theme.vw1920(15)};
      line-height: ${({ theme }) => theme.vw1920(23)};
      margin-right: 0;
    }
  }
`;

export default FooterInformation;
