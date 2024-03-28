import React from "react";
import { UserContext } from "../UserContext";

function useUserContext() {
  return React.useContext(UserContext);
}

export { useUserContext };
