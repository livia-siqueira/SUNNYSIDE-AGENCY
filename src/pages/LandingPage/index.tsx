import Header from "../../components/Header";
import ItemImage from "../../components/ItemImage";
import ItemImageText from "../../components/ItemImage-and-Text";
import ItemText from "../../components/ItemText";
import * as s from "./styles";

const LandingPage = () => {
  return (
    <s.Container>
      <Header />
      <s.Main>
        <ItemText title="Transform your brand">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </ItemText>
        <ItemImage image="/desktop/image-transform.jpg"/>
        <ItemImage image="/desktop/image-stand-out.jpg"/>
        <ItemText title="Stand out to the right audience">
          Using a collaborative formula of designers, researchers,
          photographers, videographers and copywriters, we'll build and extend
          your brand in digital place.
        </ItemText>
        <ItemImageText
          image="/desktop/image-graphic-design.jpg"
          title="Graphic Design"
        >
          Great Design makes you memorable. We deliver artwork that underscore
          your brand message and captures potential client's attention
        </ItemImageText>
        <ItemImageText
          image="/desktop/image-photography.jpg"
          title="Photography"
        >
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image
        </ItemImageText>
      </s.Main>
    </s.Container>
  );
};

export default LandingPage;
