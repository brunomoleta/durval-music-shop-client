import { LogoTop } from "../../styled-components/Header.styles.tsx";
import { logoName } from "../../services/database.ts";
import { useProductContext } from "../../providers/hooks";
import { IFullProductContext } from "../../types/product";

function HeaderLogo() {
  const { returnHome } = useProductContext() as IFullProductContext;
  return (
    <button onClick={returnHome}>
      <LogoTop>{logoName}</LogoTop>
    </button>
  );
}

export default HeaderLogo;
