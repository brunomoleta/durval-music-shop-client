import Cart from "../../Cart";
import HeaderInfo from "./HeaderInfo";
import SignInModal from "./SignInModal";

function Header() {
  return (
    <>
      <HeaderInfo />
      <SignInModal />
      <Cart />
    </>
  );
}

export default Header;
