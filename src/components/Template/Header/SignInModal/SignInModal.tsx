import Modal from "../../../Modal";
import { LogInInfo, SignUpInfo } from "../../../../services/database.ts";
import LoginOrSignUp from "../../../LoginOrSignUp";
import { IUserContext } from "../../../../types/user";
import { useUserContext } from "../../../../providers/hooks";

function SignInModal() {
  const { isLogOpen, setIsLogOpen, isSignUp } =
    useUserContext() as IUserContext;
  return (
    <Modal
      title={isSignUp ? SignUpInfo.title : LogInInfo.title}
      open={isLogOpen}
      onOpenChange={setIsLogOpen}
      element={LoginOrSignUp(isSignUp)}
    />
  );
}

export default SignInModal;
