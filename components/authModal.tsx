import React, { FC, useState } from "react";

type modal = {
  title: string;
  body: string;
  visible: boolean;
  setVisible: Function;
  number: string;
  func: Function;
};

export const AuthModal: FC<modal> = ({ visible, setVisible, func, number }) => {
  let [code, setCode] = useState("");

  return (
    <>
      {visible ? (
        <div className={"cover"}>
          <div className={"center"}>
            <input
              className="auth-input"
              type="number"
              maxLength={6}
              placeholder="Auth code"
              onChange={(e) => setCode(e.target.value)}
            ></input>
            <div className="button-holder">
              <button
                type="submit"
                className="auth-button-primary"
                onClick={func(number, code)}
              >
                Verify
              </button>
              <button
                type="button"
                className="auth-button-negative"
                onClick={() => setVisible(!visible)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
