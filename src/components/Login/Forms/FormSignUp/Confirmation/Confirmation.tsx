import { useUserContext } from "../../../../../providers/UserContext";

import { Eye, EyeOff } from "react-feather";
import { IUserContext } from "../../../../../types/user";
import {
  InlineButton,
  SendBtn,
} from "../../../../../styled-components/Button.styles.ts";
import React from "react";
import { H3 } from "../../../../../styled-components/Typography.styles.ts";
import { colors } from "../../../../../styled-components/root.ts";
import Loader from "../../../../Loader";
import {
  Line,
  Title,
  Wrapper,
} from "../../../../../styled-components/FormCreation.styles.ts";

function Confirmation() {
  const {
    setIsPasswordVisible,
    isPasswordVisible,
    signUpRequest,
    signUpInfo,
    setSignUpInfo,
    setStep,
    isLoading,
  } = useUserContext() as IUserContext;

  async function submit() {
    await signUpRequest(signUpInfo);
    setStep(0);
    setSignUpInfo({});
  }

  const sendBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setIsPasswordVisible(false);
    if (sendBtnRef && sendBtnRef.current) {
      // Call the focus method
      sendBtnRef.current.focus();
    }
  }, []);
  return (
    <>
      <Wrapper>
        <H3>Confirme seus dados:</H3>
        <div style={{ display: "grid", gap: "12px" }}>
          <Line>
            <Title>nome:</Title>
            <span style={{ textAlign: "left" }}>
              {signUpInfo.firstName} {signUpInfo.lastName}
            </span>
          </Line>
          <Line>
            <Title>email:</Title>
            <span>{signUpInfo.email}</span>
          </Line>
          <div
            style={{ display: "grid", gridTemplateColumns: "10ch 1fr auto" }}
          >
            <Title>senha:</Title>
            <div>
              <input
                style={{ width: "fit-content" }}
                disabled={true}
                type={isPasswordVisible ? "text" : "password"}
                value={signUpInfo.password}
              />
              <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
        >
          <SendBtn onClick={submit} ref={sendBtnRef} disabled={isLoading}>
            {isLoading ? <Loader /> : "ENVIAR"}
          </SendBtn>
          <InlineButton
            style={{
              width: "fit-content",
              color: colors.grey60,
              textAlign: "center",
            }}
            onClick={() => {
              setStep(0);
              setSignUpInfo({});
            }}
          >
            Voltar ao início
          </InlineButton>
        </div>
      </Wrapper>
    </>
  );
}

export default Confirmation;
