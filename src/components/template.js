import ThemedImage from '@theme/ThemedImage';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
flex-direction: column;
margin: 0 auto;
`;

const Row = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 16px;
justify-content: center;
margin: 0 auto;
padding: 1rem 0;
max-width: 960px;
@media (max-width: 960px) {
  grid-template-columns: 1fr;
  padding: 1rem;
  max-width: 100%;
  margin: 0 1rem;
}
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}
`;

const TwoRow = styled(Row)
`
grid-template-columns: 1fr 1fr;
grid-gap: 48px;
@media (max-width: 960px) {
  grid-template-columns: 1fr;
}
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}
`;

const Card = styled.div `
display: flex;
max-height: 250px;
min-width: 350px;
padding: 1rem;
flex-direction: column;
justify-content: center;
cursor: pointer;
border: 1px solid transparent;
border-radius: 20px;
border: 1px solid var(--ifm-color-emphasis-200);
/* flex: 1 1 0px; */
&:hover {
  border: 1px solid var(--ifm-color-emphasis-400);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
}
@media (max-width: 960px) {
  width: 100%;
}
`;

const CenterCard = styled(Card)
`
min-width: 250px;
justify-content: space-between;
align-items: center;
flex-direction: row;
display: grid;
grid-template-columns: 48px 1fr;
gap: 24px;
h3 {
  margin-bottom: 0.25rem;
}
p {
  margin-bottom: 0px;
}
`;

const ShadowCard = styled(Card)
`
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
background-color: #ffffff10;
backdrop-filter: blur(10px);
min-height: 200px;
/* background-color: var(--ifm-color-emphasis-0); */
`;

const WideCard = styled(ShadowCard)
`
max-height: auto;
@media (max-width: 960px) {
  margin: 0 2rem;
  max-height: fit-content;
  width: fit-content;
}
`;

const IconWrapper = styled.div `
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
`;

const TopSection = styled.div `
width: 100%;
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: row;
margin-bottom: 1rem;
`;

const LinkRow = styled.div `
width: 100%;
align-items: center;
justify-content: space-between;
display: flex;
flex-direction: row;
a h3 {
  color: black !important;
}
`;

const DocsHeader = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
width: 100%;
position: relative;
`;

const DocsHeaderContent = styled.div `
padding: 4rem 0;
text-align: center;
display: flex;
flex-direction: column;
align-Items: center;
`;

const StyledImage = styled(ThemedImage)
`
position: relative;
z-index: -1;
width: 100%;
object-fit: cover;
`;

const StyledTitleImage = styled(StyledImage)
`
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
position: absolute;
opacity: 0.2;
mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`;

const StyledGithubIcon = styled.div `
svg {
  fill: var(--ifm-font-color-base);
}
`;

const SmOnly = styled.div `
@media (max-width: 960px) {
  display: none;
}
`;

export {
    Container,
    Row,
    TwoRow,
    Card,
    CenterCard,
    ShadowCard,
    WideCard,
    IconWrapper,
    TopSection,
    LinkRow,
    DocsHeader,
    DocsHeaderContent,
    StyledImage,
    StyledTitleImage,
    StyledGithubIcon,
    SmOnly
}