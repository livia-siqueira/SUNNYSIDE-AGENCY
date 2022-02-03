import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ItemImage from "../../components/ItemImage";
import ItemImageText from "../../components/ItemImage-and-Text";
import ItemPerfil from "../../components/ItemPerfil";
import ItemText from "../../components/ItemText";
import * as s from "./styles";

const LandingPage = () => {
  return (
    <s.Container>
      <Header />
      <s.Main>
        <s.ImagesAlterResponsive>
          <ItemText title="Transform your brand">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </ItemText>
          <ItemImage image="/desktop/image-transform.jpg" />
        </s.ImagesAlterResponsive>
        <ItemImage image="/desktop/image-stand-out.jpg" />
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
        <s.TitleClient>client testimonials</s.TitleClient>
        <s.Perfis>
          <ItemPerfil
            name="Emily R"
            image="/desktop/image-emily.jpg"
            profession="Marketing director"
          >
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadliines were always hit.
          </ItemPerfil>
          <ItemPerfil
            name="Thomas S"
            image="/desktop/image-thomas.jpg"
            profession="Chef operation Officer"
          >
            Sunnyside's enthusiasm couples with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </ItemPerfil>
          <ItemPerfil
            name="Jennie F"
            image="/desktop/image-jennie.jpg"
            profession="Business Owner"
          >
            Incredible end result! Cur sales increased over 400% when we worked
            with Sunnyside Highly recommended!
          </ItemPerfil>
        </s.Perfis>
        <s.Images>
          <s.Image src="/desktop/image-gallery-milkbottles.jpg" />
          <s.Image src="/desktop/image-gallery-orange.jpg" />
          <s.Image src="/desktop/image-gallery-cone.jpg" />
          <s.Image src="/desktop/image-gallery-sugarcubes.jpg" />
        </s.Images>
        <Footer />
      </s.Main>
    </s.Container>
  );
};

export default LandingPage;
