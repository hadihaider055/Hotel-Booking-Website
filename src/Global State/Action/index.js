export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const SIGN_OUT = "SIGN_OUT";

export const sign_up = (email) => {
  return {
    type: SIGN_UP,
    payload: email,
  };
};

export const log_in = (email) => {
  return {
    type: LOG_IN,
    payload: email,
  };
};

export const sign_out = () => {
  return {
    type: SIGN_OUT,
  };
};
