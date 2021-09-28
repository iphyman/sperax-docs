import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme-original/SearchBar';
import DiscordLogo from '@site/static/img/discord.svg';
import {
  Container,
  Row,
  CenterCard,
  ShadowCard,
  IconWrapper,
  TopSection,
  DocsHeader,
  DocsHeaderContent,
  StyledGithubIcon,
  SmOnly
} from '../components/template'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { BsBook, BsChatDots } from 'react-icons/bs'
import { RiTeamLine } from 'react-icons/ri'

const mainCTA = [
  {
    title: "What is USDs",
    href: "https://sperax.io/USDs",
    icon: IoInformationCircleOutline,
    to: "#",
    text: `Learn more about USDs a hybrid stablecoin of crypto-collateralization and algorithm.`,
  },
  {
    title: "Smart contract overview",
    href: "#",
    icon: BsBook,
    to: "./protocol/reference/smart-contracts",
    text: `Learn more about the Sperax protocol smart contract.`,
  },
  {
    title: "Meet the team",
    href: "https://sperax.io/team",
    icon: RiTeamLine,
    to: "#",
    text: `Meet our awesome team mates from around the globe.`,
  }
]

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <Container>
        <DocsHeader>
          <DocsHeaderContent>
          <h1 style={{ fontWeight: "600" }}>Welcome to Sperax USDs Docs</h1>
            <SmOnly>
              <SearchBar />{" "}
            </SmOnly>
          </DocsHeaderContent>
          <Row>
          {mainCTA.map((cta) => (
              <Link style={{ textDecoration: "none" }} to={cta.to}>
                <ShadowCard key={cta.title}>
                  <TopSection>
                    <IconWrapper>
                      <cta.icon
                        style={{ width: "24px" }}
                      />
                    </IconWrapper>

                    <svg
                      style={{ width: "24px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </TopSection>
                  <h3 style={{ marginBottom: ".75rem" }}>
                    {cta.title}
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>{cta.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>
        <Row>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://discord.gg/bYMNBnj"}
          >
            <CenterCard>
              <DiscordLogo style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Discord</h3>
                <p>Connect with us on Discord for realtime support.</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://forum.sperax.io/"}
          >
            <CenterCard>
              <BsChatDots style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Forum</h3>
                <p>Dicsuss governance and more.</p>
              </div>
            </CenterCard>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={"https://github.com/Sperax"}
          >
            <CenterCard>
              <StyledGithubIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120.78 117.79"
                  style={{ width: "48px" }}
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        class="cls-1"
                        d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                      />
                      <path
                        class="cls-2"
                        d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                      />
                      <path
                        class="cls-2"
                        d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                      />
                      <path
                        class="cls-2"
                        d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                      />
                      <path
                        class="cls-2"
                        d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                      />
                      <path
                        class="cls-2"
                        d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                      />
                      <path
                        class="cls-2"
                        d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                      />
                    </g>
                  </g>
                </svg>{" "}
              </StyledGithubIcon>
              <div>
                <h3>Github</h3>
                <p>View all Sperax opensource projects.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
      </Container>
    </Layout>
  );
}
