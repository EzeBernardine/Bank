import React from "react";
import { Container, Close } from "./styles";
import { AlertIcon, SuccessIcon } from "../../assest/svg";
import { useEffect, useState } from "react";

const Alert = ({ type, duration, children }) => {
  // handle the display of the alert component.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout =
      duration &&
      /**
       * visible is set to false after a a period of time, though if no duration is set,
       * it remains true making the alert component always visible.
       */
      setTimeout(() => {
        setVisible(false);
      }, duration);

    return () => timeout && clearTimeout(timeout); //Clears the setTimeout to avoid errors
  }, [children, duration]);

  return (
    <>
      {visible ? (
        <Container type={type}>
          {type === "success" ? (
            <SuccessIcon width="15px" height="15px" />
          ) : (
            <AlertIcon width="15px" height="15px" />
          )}

          {type === "warning" ? (
            <Close onClick={() => setVisible(false)}>Close</Close>
          ) : null}

          {children}
        </Container>
      ) : null}
    </>
  );
};

export default Alert;
