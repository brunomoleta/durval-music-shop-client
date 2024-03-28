import { IUserContext } from "../../../../types/user";
import Email from "./Email";
import Password from "./Password";
import { useUserContext } from "../../../../providers/hooks/";

function FormLogin() {
  const { stepLogin } = useUserContext() as IUserContext;

  return (
    <>
      {stepLogin === 0 && <Email />}
      {stepLogin === 1 && <Password />}
    </>
  );
}

export default FormLogin;
