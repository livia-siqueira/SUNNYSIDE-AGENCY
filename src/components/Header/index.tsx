import { useCallback, useState } from "react";
import Nav from "../Nav";
import * as s from "./styles";
import { FiMenu } from "react-icons/fi";
const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const changeStateMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);
  return (
    <s.Container>
      <s.Content>
        <s.Title>sunnyside</s.Title>
        <s.Nav>
          <Nav page="Header" />
        </s.Nav>
        {menu && (
          <s.Menu>
            <Nav page="Header"/>
          </s.Menu>
        )}
        <s.Icon onClick={changeStateMenu}>
          <FiMenu size={36} />
        </s.Icon>
      </s.Content>
      <s.Defination>
        <s.TextDefine>we are creatives</s.TextDefine>
        <s.IconArrow />
      </s.Defination>
    </s.Container>
  );
};

export default Header;
