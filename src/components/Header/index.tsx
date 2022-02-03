import * as s from "./styles";


const Header: React.FC = () => {
  return (
    <s.Container>
      <s.Content>
        <s.Title>sunnyside</s.Title>
        <s.Nav>
          <s.ButtonNav>About</s.ButtonNav>
          <s.ButtonNav>Services</s.ButtonNav>
          <s.ButtonNav>Projects</s.ButtonNav>
          <s.ButtonNav>Contact</s.ButtonNav>
        </s.Nav>
      </s.Content>
      <s.Defination>
        <s.TextDefine>we are creatives</s.TextDefine>
        <s.IconArrow />
      </s.Defination>
    </s.Container>
  );
};

export default Header;
