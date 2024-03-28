import React from "react";
import { AnuncioContext } from "../UserContext";

const useAnuncioContext = () => React.useContext(AnuncioContext);

export { useAnuncioContext };
