export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const SIGN_OUT = "SIGN_OUT";
export const USER_SEARCH = "USER_SEARCH";
export const BOOK_SLOT = "BOOK_SLOT";
export const PERSONAL_INFO = "PERSONAL_INFO";

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

export const user_search = (city, rooms, checkInDate, checkOutDate) => {
  return {
    type: USER_SEARCH,
    payload: { city, rooms, checkInDate, checkOutDate },
  };
};

export const book_slot = (hotelname) => {
  return {
    type: BOOK_SLOT,
    payload: hotelname,
  };
};

export const personal_info = (
  userFirstName,
  userLastName,
  userEmail,
  userPhoneNumber,
  userPassport,
  userAddress,
  userCity,
  userState,
  userCountry,
  userZipCode
) => {
  return {
    type: PERSONAL_INFO,
    payload: {
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber,
      userPassport,
      userAddress,
      userCity,
      userState,
      userCountry,
      userZipCode,
    },
  };
};
