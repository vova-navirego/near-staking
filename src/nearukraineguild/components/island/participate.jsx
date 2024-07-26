const { href } = VM.require("devhub.near/widget/core.lib.url");

href || (href = () => {});

const Container = styled.div`
  margin-top: 2.25rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const LinkItem = styled.a`
  color: #00ec97;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */

  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: #096d50;
  }
`;

const Links = [
  {
    links: [
      {
        title: "Participate in Zealy Onchain Quests",
        href: "/zealy/onchain-quests",
        count: 1,
      },
      {
        title: "Each month 500$ total pool",
        href: "/zealy/onchain-quests",
        count: 2,
      },
    ],
  },
  {
    links: [
      {
        title: "100+ participants",
        href: "/zealy/onchain-quests",
        count: 3,
      },
      {
        title: "Mystery Boxes",
        href: "/zealy/mystery-boxes",
        count: 4,
      },
    ],
  },
  {
    links: [
      {
        title: "Partner with us",
        href: "/zealy/onchain-quests",
        count: 5,
      },
    ],
  },
];

const Partnerships = [
  {
    title: "Here Wallet",
    placeholder: "/images/here-wallet-placeholder.jpg",
  },
  {
    title: "Veax",
    placeholder: "/images/veax-placeholder.jpg",
  },
  {
    title: "Zomland",
    placeholder: "/images/zomland-placeholder.jpg",
  },
  {
    title: "Opact",
    placeholder: "/images/opact-placeholder.jpg",
  },
  {
    title: "Meteor Wallet",
    placeholder: "/images/meteor-wallet-placeholder.jpg",
  },
  {
    title: "PembRock",
    placeholder: "/images/pembrock-placeholder.jpg",
  },
];

const CTA = styled.a`
  display: flex;
  padding: 0.875rem 1rem;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1rem;
  background: #00ec97;

  color: #f4f4f4 !important;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  letter-spacing: -0.03rem;

  width: max-content;
  margin-top: 1.5rem;

  &:hover {
    background: #555555;
    text-decoration: none !important;
  }

  @media screen and (max-width: 768px) {
    color: #f4f4f4 !important;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 24px */

    display: flex;
    padding: 14px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 16px;
    background: #555555;

    &:hover {
      //background: #555555;
      text-decoration: none;
    }
  }
`;

const SectionPadding = styled.div`
  padding: 3rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    padding-top: 0;
  }
`;

const LinksContainer = styled.div`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Content = (
  <SectionPadding>
    <Container>
      {Links.map((it) => (
        <LinksContainer key={Math.random()}>
          <div className="d-flex flex-column gap-3 gap-md-2">
            {it.links.map((link) => (
              <div className="d-flex flex-row">
                <span
                  style={{
                    color: "#555555",
                    border: "2px #555555 solid",
                    fontSize: 12,
                    padding: 4,
                    width: 22,
                    height: 22,
                  }}
                  className="rounded-circle d-flex align-items-center justify-content-center me-1"
                >
                  {link.count}
                </span>{" "}
                <LinkItem href={link.href} target="no_blank">
                  {link.title}
                </LinkItem>
              </div>
            ))}
          </div>
        </LinksContainer>
      ))}
    </Container>

    <Container>
      {Partnerships.map((link) => (
        <LinksContainer key={Math.random()}>
          <div className="d-flex flex-column gap-3 gap-md-2">
            <div className="d-flex flex-row">
              {link.count}{" "}
              <LinkItem href={link.href} target="no_blank">
                {link.title}
              </LinkItem>
            </div>
          </div>
        </LinksContainer>
      ))}
    </Container>

    <Link
      to={href({
        widgetSrc: "devhub.near/widget/app",
        params: { page: "contribute" },
      })}
      style={{ textDecoration: "none" }}
    >
      <CTA>Learn more →</CTA>
    </Link>
  </SectionPadding>
);

return (
  <Widget
    src="devhub.near/widget/devhub.components.island.home-section"
    props={{
      title: "/participate",
      titleColor: "#555555",
      description:
        "There are many ways to start your contribution journey. You can:",
      children: Content,
    }}
  />
);
