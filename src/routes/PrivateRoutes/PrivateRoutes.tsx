import { Navigate, Outlet } from "react-router-dom";
import { IUserContext } from "../../types/user";
import { useUserContext } from "../../providers/hooks";

function PrivateRoutes() {
  const { token } = useUserContext() as IUserContext;

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
