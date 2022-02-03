import { useCallback, useState } from "react";
import * as s from "./styles";

const Nav: React.FC<{ page: string }> = ({ page }) => {
    const [buttonSelected, setButtonSelected] = useState<number>(1);

    const changeButton = useCallback((number: number) => {
        setButtonSelected(number);
    }, [])

    return (
    <s.Nav page={page}>
      <s.ButtonNav page={page} onClick={changeButton.bind(null, 1)} isActive={buttonSelected === 1}>About</s.ButtonNav>
      <s.ButtonNav page={page} onClick={changeButton.bind(null, 2)} isActive={buttonSelected === 2}>Services</s.ButtonNav>
      <s.ButtonNav page={page} onClick={changeButton.bind(null, 3)} isActive={buttonSelected === 3}>Projects</s.ButtonNav>
      {page === "Header" && <s.ButtonNav page={page} onClick={changeButton.bind(null, 4)} isActive={buttonSelected === 4}>Contact</s.ButtonNav>}
    </s.Nav>
  );
};

export default Nav;
